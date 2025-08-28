const fs = require("fs");
const readFileHelper = (dbName) => {
    const data = fs.readFileSync(`./db/${dbName}.json`);
    return JSON.parse(data);
};