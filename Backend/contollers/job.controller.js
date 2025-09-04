import { title } from "process";
import { Job } from "../models/job.model.js";
import { Console } from "console";

export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, Position, companyId } = req.body;
        const userId = req.id;
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !Position || !companyId) {
            return res.status(400).json({
                msg: "Something is missing",
                success: false
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            jobPosition: Position, company: companyId, created_by: userId
        })
        return res.status(201).json({
            msg: "New job created successfully",
            job,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        }
        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});
        if (!jobs) {
            return res.status(404).json({
                msg: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: false
        })
    } catch (error) {
        console.log(error)
    }
}

export const getJobByid = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                msg: "Job not found",
                success: false
            })
        }
        return res.status(200).json({
            job,
            success: true
        })
    } catch (error) {
        Console.log(Error)
    }
}

export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId });
        if (!jobs) {
            return res.status(404).json({
                msg: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}