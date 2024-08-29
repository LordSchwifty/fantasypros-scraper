const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://www.fantasypros.com/nfl/rankings/dynasty-overall.php';

async function scrapeData() {
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const rankings = [];
        // Adjust the selector based on the actual HTML structure
        $('table table-striped player-table table-hover js-table-caption').each((index, element) => {
            const player = $(element).find('fp-player-name').text().trim();
            const team = $(element).find('player-cell-team').text().trim();

            if (player && team) {
                rankings.push({ player, team });
            }
        });

        console.log('Scraped Data:', rankings); // Log the scraped data to the console
        return rankings;
    } catch (error) {
        console.error('Error scraping data:', error);
        return [];
    }
}


module.exports = scrapeData;


