const ImageService = require('../application/imageservice')
const multer = require('multer')

class ImageController{
     static async add(req,res){
        var imageservice = new ImageService();
        var response = await imageservice.add({
            buffer:req.files[0].buffer
        });
        res.json(response);

    }
}

module.exports = function(app){
    const upload = multer()
   app.post('/pizzas/image',upload.any(),ImageController.add)
}