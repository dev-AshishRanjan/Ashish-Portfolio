const connectDataBase = require("./config/database");
import ProjectSchemas from "./config/schema";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  try {
    await connectDataBase();

    switch (method) {
      case "GET":
        // Fetch all documents from the collection
        const fetchData = await ProjectSchemas.find({});
        res.status(200).json({ data: fetchData });
        break;

      case "DELETE":
        // Delete a document by ID
        // console.log(mongoose.Types.ObjectId.isValid(id));
        // const objectId = new mongoose.Types.ObjectId(id);
        const deleteData = await ProjectSchemas.findByIdAndDelete(id);
        if (deleteData) {
          res.status(200).json({ data: deleteData });
        } else {
          res.status(404).json({ error: "Not Found" });
        }
        break;

      case "PUT":
        req.body =
          typeof req.body === "string" ? JSON.parse(req.body) : req.body;
        // const { name, github } = req.body;
        const updateData = await ProjectSchemas.findByIdAndUpdate(
          req.query.id,
          req.body,
          { new: true } // Return the updated document
        );
        if (updateData) {
          res.status(200).json({ data: updateData });
        } else {
          res.status(404).json({ error: "Not Found" });
        }
        break;

      case "POST":
        // Create a new document
        // const { newId,newName, newGithub } = req.body;
        req.body =
          typeof req.body === "string" ? JSON.parse(req.body) : req.body;
        if (
          !req.body.id ||
          !req.body.title ||
          !req.body.talk ||
          !req.body.techStack ||
          !req.body.link
        ) {
          return res.status(400).json({
            error: "ID,Title, Talk,TechStack, Link fields are required",
          });
        }
        const newData = new ProjectSchemas({
          id: req.body.id,
          title: req.body.title,
          talk: req.body.talk,
          techStack: req.body.techStack,
          link: req.body.link,
        });
        const savedData = await newData.save();
        res.status(201).json({ data: savedData });
        break;

      default:
        res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
