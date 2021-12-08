const connectDB = function() {
    const MongoClient = require("mongodb").MongoClient;
    const user = process.env.DBNAME || "Lapua";
    const pwd = process.env.DBPASS || "Magnum";
    const uri = `mongodb+srv://${user}:${pwd}@cluster0.m7chs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;