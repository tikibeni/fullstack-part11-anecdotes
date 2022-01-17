const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'build')))

app.get('/health', (req, res) => {
    res.send('ok')
})

app.get('/version', (req, res) => {
    res.send('V1.1') // this could be improved with env-variable...
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})