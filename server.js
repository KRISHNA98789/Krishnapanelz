const express = require('express');
const { exec } = require('child_process'); // Command run karne ke liye
const app = express();

// Public folder serve karne ke liye
app.use(express.static('public'));
app.use(express.json());

// Button se command receive karne ka route
app.post('/run-command', (req, res) => {
    const action = req.body.action;
    console.log(`Command received: ${action}`);

    // Yaha apna actual command run karo
    exec(`echo ${action}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error executing command');
        }
        console.log(stdout);
        res.sendStatus(200);
    });
});

// Server start
app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});