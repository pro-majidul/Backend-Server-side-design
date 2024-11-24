const express = require('express');
const app = express();
const port =process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('server side running on ')
})

const data = [
    { id: 1, name: 'Sabila', email: 'sabila@nabila.com' },
    { id: 2, name: 'Nabila', email: 'nabila@sabila.com' },
    { id: 3, name: 'Hablu', email: 'hablu@nablu.com' },
]

app.get('/user', (req, res) => {
    res.send(data)
})
app.listen(port, () => {
    console.log(`server side is running on port ${port}`)
})
