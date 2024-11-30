const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// Route for checking the hash
app.post('/check', (req, res) => {
    const word = req.body.word;
    const hash = md5(word);

    if (hash === '18a212688ea34f77d65bfed20eb055e8') {
        res.send('Congratulations Flag{GG18a212688ea34f77d65bfed20eb055e8eb055e8@0xbugatti_reverse}');
    } else {
        res.send('Try again. The MD5 hash does not match.');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
