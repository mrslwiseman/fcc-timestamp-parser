const express = require('express');
const app = express();
const parseDate = require('./helpers');

app.get('/:date', (req,res) => {
    const query = req.params.date;
    if(!query) {
        res.json({ error: "Please provide a timestamp to parse!"})
    } else {
        const parsed = parseDate(query)
        res.json(parsed)
    }
})

app.get('*', (req,res) => {
    res.send('this will be the instruction page.')
})

app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
    
});

module.exports = server;
