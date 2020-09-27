import mongoose, {
  Document,
  Model,
  model,
  Types,
  Schema,
  Query,
  Mongoose,
} from "mongoose";

const boxSchema = new Schema({
  boxId: { type: String, required: true },
});

interface boxParentSchema extends Document {
  boxId: string;
}


const db = mongoose.model("user_data", boxSchema);

module.exports =  db
