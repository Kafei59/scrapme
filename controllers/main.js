const CheerioService = require('../services/cheerio');

module.exports.index = function(req, res) {
    res.render('index');
}

module.exports.scrape = function(req, res) {
    CheerioService.scrape('http://www.marmiton.org/recettes/recette-hasard.aspx', function(err, recipe) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
        res.json(recipe);
    });
}
