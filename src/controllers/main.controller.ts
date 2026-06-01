import { RequestHandler } from "express";

export const getAllPosts: RequestHandler = async (req, res) => {
    return res.json({message:'Obtendo todos os posts...'})
}

export const getPost: RequestHandler = async (req, res) => {
    return res.json({message:'Obtendo o post com slug: ${req.params.slug'})
}

export const getRelatedPost: RequestHandler = async (req, res) => {
    return res.json({message:'Obtendo posts ao post com slug: ${req.params.slug'})
}