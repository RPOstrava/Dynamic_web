const express = require('express');
const app = express();
const port = 8000;

let message = 'Initial message';

app.use(express.static('public'));
app.use(express.json());

app.post('/change', (req, res) => {
    message = req.body.message;
    res.json({ message });
});

app.get('/message', (req, res) => {
    res.json({ message });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
