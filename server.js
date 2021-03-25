// noting our expess and housing it in variable app
const { response } = require('express')
const express = require('express')
const app = express()

//this will be our API object with a list of pueblos magicos
let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {   id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]
//requesting the home page from the server
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  

  //requesting json file from the server
  app.get('/api/notes', (request, response) => {
    response.json(notes)
  })
//fetching specific items by id
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const note = notes.find(note => note.id === id)

    if (note){    
        response.json(note)  
    }else {response.status(404).end()  

    }
  })

  //deleting resources
  app.delete('/api/notes/:id', (request, response) => {
      const id = Number(request.params.id)
      notes = notes.filter(note => note.id !== id)

      response.status(204).end()
  })

const PORT = 3001 
app.listen(PORT)
console.log(`Server is running on port ${PORT}`)