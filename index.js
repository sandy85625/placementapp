import express from "express";

import userRoute from "./controllers/users.js";
import recruiterRoute from "./controllers/recruiter.js";
import projectRoute from "./controllers/projects.js";
import jobRoute from"./controllers/jobs.js";
import studentresumesRoute from"./controllers/studentResumes.js";
import educationRoute from"./controllers/education.js";

const app = express();
const port = 3000;



app.use(express.json());

// Importing userRoute and using it for handling /Users_Table route
app.use("/Users_Table", userRoute);
app.use("/recruiter_profiles",recruiterRoute);
app.use("/projects", projectRoute);
app.use("/jobs",jobRoute);
app.use("/student_resumes",studentresumesRoute);
app.use("/education",educationRoute);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});