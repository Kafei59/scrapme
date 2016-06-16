const request = require('request');
const cheerio = require('cheerio');
const S = require('string');

module.exports.scrape = function(url, cb) {
    var recipe = {};

    request(url, function(err, response, html) {
        if (!err) {
            var $ = cheerio.load(html);

            recipe = {
                'title': S($('.fn').text()).trim().s,
                'info': S($('.m_content_recette_main .m_content_recette_info').text()).trim().s,
                'ingredients': S($('.m_content_recette_main .m_content_recette_ingredients').text()).trim().s,
                'todo': S($('.m_content_recette_main .m_content_recette_todo').text()).trim().s
            };
        }

        cb(err, recipe);
    });
}