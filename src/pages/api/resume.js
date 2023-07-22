// api/resume.js

// Replace process.env.RESUME_LINK with the environment variable name you set on Vercel
var resumeLink = process.env.RESUME_LINK || "";

export default function handler(req, res) {
  if (req.method === "POST") {
    let link  = req.body;
    console.log({link});
    // link = JSON.parse(link);
    // Optionally, you can perform data validation here before updating the resumeLink
    resumeLink = link;

    // Respond with the updated resume link
    res.status(200).json({ status: 200, data: resumeLink });
  } else if (req.method === "GET") {
    res.status(200).json({ status: 200, data: resumeLink });
  } else {
    res.status(400).json({ status: 400, data: "John Doe" });
  }
}
