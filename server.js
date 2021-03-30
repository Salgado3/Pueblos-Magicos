const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let PueblosMagicos = {
'Cancun International Airport': {
    "Name": "Tulum",
    "State": "Quintana Roo",
    "Airport": "Cancun",
    "image": "unsplash",
    "wiki": "wiki goes here",
    "wikiTravel": "https://en.wikivoyage.org/wiki/Tulum#Q725883"
},
'Cancun International Airport': {
    "Name": "Isla Mujeres",
    "State": "Quintana Roo",
    "Airport": "Cancun",
    "image": "https://images.unsplash.com/photo-1612550467658-97cb7b05043a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "photoBy": "Photo by <a href="https://unsplash.com/@jess33mx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jose Vazquez</a> on <a href="https://unsplash.com/s/photos/isla-mujere?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    "
    "wiki": "wiki goes here",
    "wikiTravel": "https://en.wikivoyage.org/wiki/Isla_Mujeres#Q1020769"
},
'Del Bajío International Airport': {
    "Name": "Dolores Hidalgo",
    "State": "Guanajuato",
    "Airport": "BJX",
    "image": "unspashy",
    "wiki": "https://en.wikipedia.org/wiki/Dolores_Hidalgo",
    "wikiTravel": "https://en.wikivoyage.org/wiki/Dolores_Hidalgo#Q958153"
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

app.get('/api/PueblosMagicos/:airportName', (request, response)=>{
    const airport = request.params.airportName

    if(PueblosMagicos[airport]){
    response.json(PueblosMagicos[airport])
}else{
    response.json(PueblosMagicos['Unkown'])
}
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})

