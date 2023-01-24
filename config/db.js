const mongoos = require("mongoose");

let connect = mongoos.connect(process.env.MONGO_URL);

module.exports = { connect };
