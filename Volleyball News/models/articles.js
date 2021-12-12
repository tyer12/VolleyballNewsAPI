const axios = require('axios')
const cheerio = require('cheerio')

const newspapers = [
    {
        name: 'volleyballworld',
        address: 'https://en.volleyballworld.com/news/',
        base: 'https://en.volleyballworld.com'
    },
    {
        name: 'worldofvolley',
        address: 'https://worldofvolley.com/latest_news',
        base: '',
    },
    {
        name: 'news18',
        address: 'https://www.news18.com/topics/volleyball/',
        base: '',
    },
    {
        name: 'volleyball_ca',
        address: 'https://volleyball.ca/en/news/coach-profile-olivier-faucher',
        base: '',
    }
]

const articles = []

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("volleyball")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: newspaper.base + url,
                    source: newspaper.name
                })
            })
            $('a:contains("Volleyball")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: newspaper.base + url,
                    source: newspaper.name
                })
            })
        })
})

exports.news = (req, res) => {
    res.json(articles)
}

exports.newspaperId = (req, res) => {
    const newspaperId = req.params.newspaperId

    const newspaperAddress = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].address
    const newspaperBase = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].base


    axios.get(newspaperAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("volleyball")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: newspaperBase + url,
                    source: newspaperId
                })
            })
            $('a:contains("Volleyball")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: newspaperBase + url,
                    source: newspaperId
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err))
}
