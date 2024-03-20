'use strict'

const project = require('../models/project');
var Project = require('../models/project');
var fs = require ('fs');
var path = require('path');



var controller = {
    home: function(req, res){
        return res.status(200).send({
            message:'Soy la Home'
        })
    },
    test: function(req, res){
        return res.status(200).send({
            message:'Soy el metodo o acccion del controlador de project'
        })
    },

    saveProject: async function(req, res){
        let project = new Project();

        var params = req.body;

        project.name        = params.name;
        project.description = params.description;
        project.year        = params.year;
        project.category    = params.category;
        project.langs        = params.langs;
        project.image       = null;


        try {
            await project.save()
            return res.status(200).send({message: 'Proyecto Guardado', params:params, project:project})
        } catch (error) {
            return res.status(500).send({message: 'No se ha podido guardar el proyecto'})
        }
    },

    getProject: async function(req, res){
        var projectId = req.params.id;
        let project;

            if(projectId== null)  
                return res.status(404).send({message:'Favor Ingresar los Datos'});   
           
    try {
        project = await Project.findById(projectId);
        return res.status(200).send({project});
    } catch (err) {
        return res.status(500).send({message:'Error a obtener los datos'}); 
    }

    },
    
    getProjects: async function(req, res){
        try {
            let projects = await Project.find({}).sort('-year').exec()     
            if (!projects) return res.status(400).send({message:'No hay nada para mostrar'});
            return res.status(200).send({projects})
           
        } catch (error) {
            return res.status(500).send({message:'Error la devolver los datos'})
        }
        
    }, 

    updateProject: async function(req, res){
        var projectId = req.params.id;
        var update = req.body;
         
        try {
            let projectUpdated = await Project.findByIdAndUpdate(projectId, update, { new: true });
            if(!projectUpdated) return  res.status(400).send({message:'No existe el proyecto para actualizar'});
            return res.status(200).send({
                project:projectUpdated});  
        } catch (error) {
            return  res.status(500).send({message:'Error al actualizar el proyecto'});  
        }          
    },

    deleteProject: async function(req, res){
        var projectId = req.params.id;

        try {
            let projectDelete = await Project.findByIdAndDelete(projectId);
            if(!projectDelete) return res.status(400).send({message:'No es posible eliminar'});
            return res.status(200).send({message:'Mensaje Eliminado Satisfactoriamente'}); 
        } catch (error) {
            return res.status(500).send({message:'Error al Eliminar'});
           
        }
    },

    UploadImage: async function (req, res){
        var projectId = req.params.id;
        var fileName = 'Imagen no Subida..';

        if (req.files) {
            
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg'|| fileExt == 'jpeg'|| fileExt == 'gif') {
             
            try {
                let projectImage = await Project.findByIdAndUpdate(projectId, {image:fileName}, { new: true });
                if(!projectImage) return res.status(404).send({message:'El proyecto no existe'});
                return res.status(200).send({project:projectImage}); 
            } catch (error) {
                return res.status(400).send({message:'La imagen no se ha subido'});
            }
   
                
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({
                        message:'La extencion no es valida'})


                    });
                }
            }

           
            
            },
            
        getImageFile: function(req, res){
            var file = req.params.image;
            var path_file = './uploads/'+file;

            fs.access(path_file, fs.constants.F_OK, (err)=>{
                if(err){
                    return res.status(200).send({message: "No existe la Imagen"});
                } else {
                    return res.sendFile(path.resolve(path_file));
                }      
        });
}

};
module.exports= controller;

