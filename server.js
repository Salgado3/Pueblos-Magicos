const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let PueblosMagicos = {
    'Tulum': {
    "Name": "Tulum",
    "State": "Quintana Roo",
    "Airport": "Cancun",
    "image": "unsplash",
    "wiki": "wiki goes here",
    "wikiTravel": "https://en.wikivoyage.org/wiki/Tulum#Q725883"
},
'Isla Mujeres': {
    "Name": "Isla Mujeres",
    "State": "Quintana Roo",
    "Airport": "Cancun",
    "image": "unsplash",
    "wiki": "wiki goes here",
    "wikiTravel": "https://en.wikivoyage.org/wiki/Isla_Mujeres#Q1020769"
},
'Unkown': {
    "Name": "No se",
    "State": "No se",
    "Airport": "No se",
    "image": "No se",
    "wiki": "No se",
    "wikiTravel": "No se"
}
}

app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/PueblosMagicos', (request, response)=>{
    response.json(PueblosMagicos)
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})

