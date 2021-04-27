/* eslint-disable */
import Sys_analiz_schema from "./Sys_analiz_schema.js";
 
class Sys_analiz_controller{
    async create (req, res){
        try {
            const { A, B, C, D, E, F, G, H } = req.body;
            const post = await Sys_analiz_schema.create({ A, B, C, D, E, F, G, H });
            res.json(post);
          } catch (e) {
            res.status(500).json(e);
          }
    }
    async getAll(req,res) {
        try {
            const posts = await Sys_analiz_schema.find();
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
            const post = await Sys_analiz_schema.findById(id);
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
            const updatedPost = await Sys_analiz_schema.findByIdAndUpdate(Sys_analiz_schema._id,Sys_analiz_schema,{new:true})
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
            const post = await Sys_analiz_schema.findByIdAndDelete(id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
export default new Sys_analiz_controller;