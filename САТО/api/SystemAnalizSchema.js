import mongoose from 'mongoose';

const SystemAnalizSchema = new mongoose.Schema({
  A: { type: Object },
  B: { type: Object },
  C: { type: Object },
  D: { type: Object },
  E: { type: Object },
  F: { type: Object },
  G: { type: Object },
  H: { type: Object },
});
export default mongoose.model('systemAnaliz', SystemAnalizSchema);
