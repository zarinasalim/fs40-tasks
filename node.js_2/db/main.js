const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;


app.use(express.json());
// fs.readFileHelper("data");
const newUser = {
    id: 4,
    name: "User_4",
    email: "user4@example.com"
};

fs.writeFileHelper("data", newUser);
// const data = fs.readFileSync("data.json");
// const jsonData = JSON.parse(data);
// fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});