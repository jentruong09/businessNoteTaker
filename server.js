const express = require('express');
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid'); 
const notes = require('./db/db')


const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//route to the /notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


// //route to get notes -- not sure??
// app.get('/api/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '/db/db.json'));
// });


//route to get notes
app.get('/api/notes', (req, res) => {
    res
})


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);