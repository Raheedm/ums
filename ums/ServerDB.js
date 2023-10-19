const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const axios = require("axios"); 

const app = express();
const port = 3000; 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const users = [
    { email: "pr@a.com", password: "1234" }
];

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get("/principal", (req, res) => {
   
    res.sendFile(__dirname + "/Principal.js");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
