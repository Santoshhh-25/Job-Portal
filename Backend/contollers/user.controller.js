import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { use } from "react";

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                msg: "something is missing",
                success: false
            });
        };
        const user_email = await User.findOne({ email });
        if (user_email) {
            return res.status(400).json({
                msg: "User already exits with this email",
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname, email, phoneNumber, password: hashedPassword, role
        });
        return res.status(200).json({
            msg: "Account created successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                msg: "Something is missing",
                success: false
            });
        };
        let user = await User.findOne(email);
        if (!user) {
            return res.status(400).json({
                msg: "Incorrect email or password",
                success: false
            })
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(400).json({
                msg: "Incorrect email or password",
                success: false
            })
        }

        if (role != user.role) {
            return res.status(400).json({
                msg: "Account doesn't exits with current role",
                success: false
            })
        }
        const tokenData = {
            userId: user._id
        }

        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile

        }
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            msg: `Welcome bacl ${User.fullname}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}