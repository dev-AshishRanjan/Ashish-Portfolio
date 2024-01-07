// schema.ts
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  talk: {
    type: String,
    required: true,
    trim: true,
  },
  techStack: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
let ProjectSchemas;
try {
  ProjectSchemas = mongoose.model("ProjectSchema");
} catch (error) {
  ProjectSchemas = mongoose.model("ProjectSchema", ProjectSchema);
}

export default ProjectSchemas;
