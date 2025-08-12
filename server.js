const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Route banate hain
app.get("/v1/public/freefire/:id",  (req, res) => {
    const playerId = req.params.id;
    res.json({
        message:  `Free Fire API called for player ${playerId}`
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});