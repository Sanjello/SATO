
import Analiz_danux_schema from "./Analiz_danux_chema.js";
 
class  Analiz_danux_controller{
    async create (req, res){
        try {
            const { A, B, C, D, E, F, G, H } = req.body;
            const post = await Analiz_danux_schema.create({ A, B, C, D, E, F, G, H });
            res.json(post);
          } catch (e) {
            res.status(500).json(e);
          }
    }
    async getAll(req,res) {
        try {
            const posts = await Analiz_danux_schema.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getOne(req,res) {
        try {
            const {id}=req.params;
            if (!id){
                res.status(400).json({massage:"id not defined"})
            }
            const post = await Analiz_danux_schema.findById(id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req,res) {
        try {
            const post = req.body;
            if (!post._id){
                req.status(400).json({massage:"id not defined"})
            }
            const updatedPost = await Analiz_danux_schema.findByIdAndUpdate(Analiz_danux_schema._id,Analiz_danux_schema,{new:true})
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async delete(req,res) {
        try {
            const {id}=req.params;
            if (!id){
                res.status(400).json({massage:"id not defined"})
            }
            const post = await Analiz_danux_schema.findByIdAndDelete(id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
export default new Analiz_danux_controller;