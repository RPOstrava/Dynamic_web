const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = 8000;

app.use(cors()); // Povolit všechny domény (prozatím)
app.use(express.static('public'));
app.use(express.json());

let message = 'Initial message';

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
