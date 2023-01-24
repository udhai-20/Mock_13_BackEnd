const { JobsModel } = require("../model/jobs.model");

const getjobs = async (req, res) => {
  try {
    console.log("req", req);
    const jobs = await JobsModel.find();
    if (jobs) {
      res.status(201).send(jobs);
    } else {
      res.status(404).send({
        message: "not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const postjobs = async (req, res) => {
  try {
    const { companyName, position, location, contract } = req.body;
    if (!companyName || !position || !location || !contract) {
      res.status(400).send({ message: "some fields are empty" });
    } else {
      let job = await JobsModel.create({
        companyName,
        position,
        location,
        contract,
      });
      await job.save();
      res.status(201).send({
        message: "success",
        data: job,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const updatejobs = async (req, res) => {
  try {
    const { companyName, position, location, contract } = req.body;
    const job = await JobsModel.findById(req.params.id);
    console.log("ote", job);

    if (job) {
      console.log("job", job);
      job.companyName = companyName !== "" ? companyName : job.companyName;
      job.position = position !== "" ? position : job.position;
      job.location = location !== "" ? location : job.location;
      job.contract = contract !== "" ? contract : job.contract;
      const updated_Job = await job.save();
      console.log(updated_Job);
      res.status(201).send({
        message: "updated",
        data: updated_Job,
      });
    } else {
      res.status(404).send({
        message: "Note Not Found",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
};
const deletjobs = async (req, res) => {
  try {
    let id_Del = req.params.id;
    const job = await JobsModel.findById(id_Del);
    if (job) {
      await JobsModel.findByIdAndDelete(req.params.id);
      res.status(200).send({ message: "deleted successfully" });
    } else {
      res.status(400).send({ message: "id not found" });
    }
  } catch (err) {
    console.log("err", err);
  }
};
const allJobs = (req, res) => {};
module.exports = { getjobs, postjobs, updatejobs, deletjobs, allJobs };
