export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, password } = JSON.parse(req.body);
    console.log(name, password);
    if (name === "admin" && password === "admin") {
      res.status(200).json({ status: 200, admin: true });
    } else {
      res.status(200).json({ status: 200, admin: false });
    }
  } else {
    res.status(400).json({ status: 400, name: "John Doe" });
  }
  // res.status(200).json({ name: "John Doe" });
}
