const connectDB = function() {
    const MongoClient = require("mongodb").MongoClient;
    const user = process.env.DBNAME || "Lapua";
    const pwd = process.env.DBPASS || "Magnum";
    const uri = ``;
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;