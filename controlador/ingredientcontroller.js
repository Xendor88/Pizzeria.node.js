const multer = require('multer')
const csv = require('csvtojson');
const Duplex = require('stream').Duplex;
const IngredientsService = require('../application/ingredientservice')

class IngredientController {

  static async ingredient(req, res) {

    let stream = new Duplex();
    stream.push(req.files[0].buffer);
    stream.push(null);

    var ingredientsService = await new IngredientsService();

    var ingredients = [];
    let result = csv({
      noheader: false,
      delimiter: ",",
      eol: "\n"
    }).fromStream(stream).subscribe(
      (json) => {
        ingredients.push(json);
      },
      () => { },
      () => {
      ingredientsService.addRange(ingredients);
        res.end()
      }
    )
  }
}
module.exports = function (app) {
  const upload = multer()
  app.post('/ingredients', upload.any(),IngredientController.ingredient)
}