
import SystemAnalizSchema from "./SystemAnalizSchema.js";
 
class SystemAnalizController{
    async create (req, res){
        try {
            const { A, B, C, D, E, F, G, H } = req.body;
            const post = await SystemAnalizSchema.create({ A, B, C, D, E, F, G, H });
            res.json(post);
          } catch (e) {
            res.status(500).json(e);
          }
    }
    async getAll(req,res) {
        try {
            const posts = await SystemAnalizSchema.find();
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
            const post = await SystemAnalizSchema.findById(id);
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
            const updatedPost = await SystemAnalizSchema.findByIdAndUpdate(SystemAnalizSchema._id,SystemAnalizSchema,{new:true})
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
            const post = await SystemAnalizSchema.findByIdAndDelete(id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
export default new SystemAnalizController;