const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//require("./rotas/rotas")(app)

//router.get('/',function(req,res){
 // res.sendFile(path.join(public+'menu.html'));
  //dirname : It will resolve to your project folder.
//});


const newspapers = [
    {
        name: 'fivb',
        address: 'https://www.https://www.fivb.com/en/about/news',
        base: 'https://www.fivb.com'
    },
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


app.get('/news', (req, res) => {
    res.json(articles)
})

app.get('/news/:newspaperId', (req, res) => {
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
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
app.use(express.static('public'));