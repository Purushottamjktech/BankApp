const express = require("express");
var bodyParser = require("body-parser");
const sequelize = require("./database/connect_database");
const fs = require('fs');

const routesInfo = JSON.parse(
  fs.readFileSync('routes.json').toString()
);

const app = express();
const port = 3000;

// const customer_model = require("./models/customer");
// const customer_document_model = require("./models/customer_document");
// const document_master_model = require("./models/document_master");

const customerRoutes = require("./api/routes/customer_routes");
const customer_document_routes = require("./api/routes/customer_document_routes");
const document_master_routes = require("./api/routes/document_master_routes");
const branch_routes = require("./api/routes/branch_routes");
const user_routes = require("./api/routes/user_routes");
const role_routes = require("./api/routes/role_routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(customerRoutes);
app.use("/document", customer_document_routes);
app.use("/master", document_master_routes);
app.use(routesInfo.API,branch_routes);
app.use(routesInfo.API,user_routes);
app.use(routesInfo.API,role_routes);

//// ******************

// customer_model.hasMany(customer_document_model);
// customer_document_model.belongsTo(customer_model);
// customer_document_model.hasMany(document_master_model);
// document_master_model.belongsTo(customer_document_model);

// customer_document_model
//   .findAll({
//     include: [
//       {
//         model: customer_model,
//         attributes: ["customer_id", "name", "emailId"],
//       },
//       {
//         model: document_master_model,
//         include: [
//           {
//             model: customer_model,
//             attributes: ["customer_id", "name", "emailId"],
//           },
//         ],
//       },
//     ],
//   })
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//// ******************

sequelize
  .sync()
  .then((res) => {
    app.listen(port, () => {
      console.log(`BankApp listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
