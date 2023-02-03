const express = require('express')

const app = express()

app.get('/', (_, res) => {
    res.json({msg: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Listening at port 4000')
})
