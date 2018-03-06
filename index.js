const express = require('express');
const app = express();
const parseDate = require('./helpers');
const path = require('path');

app.get('/:date', (req,res) => {
    const query = req.params.date;
    const parsed = parseDate(query)
    res.json(parsed)
})

app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
    
});

module.exports = server;
