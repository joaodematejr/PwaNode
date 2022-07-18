const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'public')))

let blogs = [{
        id: "1",
        title: "How To Build A RESTAPI With Javascript",
        avatar: "images/coffee2.jpg",
        intro: "iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
    },
    {
        id: "2",
        title: "How to Build an Offline-First Application with Node.js,",
        avatar: "images/coffee2.jpg",
        intro: "iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
    },
    {
        id: "3",
        title: "Building a Trello Clone with React DnD",
        avatar: "images/coffee2.jpg",
        intro: "iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
    },
];

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/blogs', (req, res) => {
    res.status(200).json({
        blogs,
    })
})

app.listen(8000, () => console.log('Server is running on Port 8000'))