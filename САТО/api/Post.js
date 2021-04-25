import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  A: { type: String },
  B: { type: String },
  C: { type: String },
  D: { type: String },
  E: { type: String },
  F: { type: String },
  G: { type: String },
  H: { type: String },
});
export default mongoose.model('Post', Post);
