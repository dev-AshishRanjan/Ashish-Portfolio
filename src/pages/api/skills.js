const fs = require("fs");
const path = require("path");
export default function handler(req, res) {
  let skill = fs.readFileSync(
    path.join(process.cwd(), "public", "skills.json"),
    "utf-8"
  );
  skill = JSON.parse(skill);
  if (req.method === "POST") {
    let { skills } = JSON.parse(req.body);
    // skill.push(data);
    skills = JSON.parse(skills);
    fs.writeFileSync(
      path.join(process.cwd(), "public", "skills.json"),
      JSON.stringify(skills)
    );
    res.status(200).json({ status: 200, data: skills });
  } else if (req.method === "GET") {
    res.status(200).json({ status: 200, data: skill });
  } else {
    res.status(400).json({ status: 400, data: "John Doe" });
  }
}
