const { Router } = require("express");
const {
  getjobs,
  postjobs,
  updatejobs,
  deletjobs,
  allJobs,
} = require("../Controler/jobs.controller");

const jobsRouter = Router();

jobsRouter.route("/jobs").get(getjobs);
jobsRouter.route("/add").post(postjobs);
jobsRouter.route("/edit").put(updatejobs);
jobsRouter.route("/delete").delete(deletjobs);
jobsRouter.route("/all").put(allJobs);

module.exports = jobsRouter;
