import mongoose from 'mongoose';

const Analiz_danux_schema = new mongoose.Schema({
  A: { type: Object },
  B: { type: Object },
  C: { type: Object },
  D: { type: Object },
  E: { type: Object },
  F: { type: Object },
  G: { type: Object },
  H: { type: Object },
});
export default mongoose.model('analiz_danux', Analiz_danux_schema);
