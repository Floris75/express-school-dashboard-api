require("dotenv").config();

const server = require("./server");
const db = require("./models");

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || "development";

/* eslint-disable no-console */
server.listen(port, async () => {
  console.debug(`Server is listening on port ${port}`);
  console.debug(`Current environment is ${env}`);
  db.sequelize.sync({ alter: false }, () => {
    console.log("db on");
  });
});
