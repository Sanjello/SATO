import mongoose from 'mongoose';

const Sys_analiz_schema = new mongoose.Schema({
  A: { type: Object },
  B: { type: Object },
  C: { type: Object },
  D: { type: Object },
  E: { type: Object },
  F: { type: Object },
  G: { type: Object },
  H: { type: Object },
});
export default mongoose.model('Sys_analiz', Sys_analiz_schema);
