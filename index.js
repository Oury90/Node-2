import express from 'express'
import bodyParser from 'body-parser'


const app = express()
const port = 5000;

let cards = []

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))

app.get("/", (req, res) =>{
    res.render('index.ejs')
})


app.post('/submit', (req, res) =>{
    const text_title = req.body['title']
    const text_content = req.body['content']

    if(text_content ==="" || text_content ===""){
        res.render('alert.ejs', {alert: 'Entrie not be empty'})
    }else{
        let newCard = {
            title: text_title,
            content: text_content
        }
        cards.push(newCard)
    }

    res.render('index.ejs', {
        datas: cards
    })
})


app.listen(port, () =>{
    console.log(`This server is running on port ${port}`)
})