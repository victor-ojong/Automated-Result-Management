const path = require("path");
const express = require("express");
const pug = require("pug");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

const studentRoute = require("./Routes/studentsRoutes");
const adminRoute = require("./Routes/adminRoute");
const globalErrorHandler = require("./Controllers/errorController");
const commonRoute = require("./Routes/commonRoutes");
const { viewLoginPage } = require("./Controllers/userController");
const pathNotFound = require("./Controllers/pathNotFoundHandler");

app.get("/", viewLoginPage);
app.use("/api/v1/common", commonRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/student", studentRoute);
app.all("*", pathNotFound);

app.use(globalErrorHandler);

module.exports = app;
