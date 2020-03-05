const Image = require ('../domain/image')
const ImageRepository = require ('../infraestructure/imagerepository')

class ImageService {

    async add(dto){
        var imageRepository = new ImageRepository();
        var image = Image.create(dto);
        await imageRepository.add(image)
        return {
            id:image.id
        }
    }
}
module.exports = ImageService;

