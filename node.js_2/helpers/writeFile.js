const writeFileHelper = (dbName, data) => {
    fs.writeFileSync(`./db/${dbName}.json`, JSON.stringify(data, null, 2));
};
