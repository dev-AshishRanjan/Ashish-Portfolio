// api/skills.js

// Replace process.env.SKILLS_DATA with the environment variable name you set on Vercel
var skillData = process.env.SKILLS_DATA || "[]";

export default function handler(req, res) {
  if (req.method === "POST") {
    let { skills } = JSON.parse(req.body);
    skills = JSON.parse(skills);
    // Optionally, you can perform data validation here before updating the skillData

    // Update the skillData
    skillData = JSON.stringify(skills);

    // Respond with the updated skills
    res.status(200).json({ status: 200, data: skills });
  } else if (req.method === "GET") {
    res.status(200).json({ status: 200, data: JSON.parse(skillData) });
  } else {
    res.status(400).json({ status: 400, data: "John Doe" });
  }
}
