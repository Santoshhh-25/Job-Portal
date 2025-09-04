import express from "express";
import { postJob, getAllJobs, getJobByid, getAdminJobs } from "../contollers/job.controller.js";
import isAuthenticated  from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/postjob").post(isAuthenticated, postJob)
router.route("/get").get(isAuthenticated, getAllJobs)
router.route("/get/:id").get(isAuthenticated, getJobByid)
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs)

export default router;