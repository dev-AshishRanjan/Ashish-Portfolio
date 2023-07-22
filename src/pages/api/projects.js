// api/projects.js

// Replace process.env.PROJECTS_DATA with the environment variable name you set on Vercel
var projectData = process.env.PROJECTS_DATA || "[]";

export default function handler(req, res) {
  if (req.method === "POST") {
    let { projects } = JSON.parse(req.body);
    projects = JSON.parse(projects);
    // Optionally, you can perform data validation here before updating the projectData

    // Update the projectData
    projectData = JSON.stringify(projects);

    // Respond with the updated projects
    res.status(200).json({ status: 200, data: projects });
  } else if (req.method === "GET") {
    res.status(200).json({ status: 200, data: JSON.parse(projectData) });
  } else {
    res.status(400).json({ status: 400, data: "John Doe" });
  }
}
