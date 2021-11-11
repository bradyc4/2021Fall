const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://$(process.env.MONGO_USER):$(process.env.MONGO_PASS)@cluster0.p19dj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const isConnected = client.connect();

module.exports = {
    client, isConnected
}