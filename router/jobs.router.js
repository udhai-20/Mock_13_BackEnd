const { Router } = require("express");
const {
  getjobs,
  postjobs,
  updatejobs,
  deletjobs,
  allJobs,
} = require("../Controler/jobs.controller");

const jobsRouter = Router();

jobsRouter.route("/get").get(getjobs);
jobsRouter.route("/add").post(postjobs);
jobsRouter.route("/edit/:id").patch(updatejobs);
jobsRouter.route("/delete/:id").delete(deletjobs);
jobsRouter.route("/all").get(allJobs);

module.exports = jobsRouter;
