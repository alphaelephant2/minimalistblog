const express = require('express')
const app = express()
const routes = require('./routes')
const port = 3000

app.use(express.urlencoded( { extended: false }))
app.use(routes)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

// How to run the app
// 