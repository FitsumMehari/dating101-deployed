const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');

const userRoute = require("./routes/userRoutes");

const uri = "mongodb+srv://datinguser:datinguser@datingapp.m099s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const instance = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

instance.connect((err, client) => {

    if (!err) {
        const db = client.db("datingapp");
        const usersCollection = db.collection("users");

        app.locals["users"] = usersCollection;

        console.log("Connected to database successfully.");
    } else {
        console.log(`Error Occurred: /n ${err}`);
    }

    // client.close()
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use((req, res, next) => {
//     const usersCollection = req.app.locals["users"];
//     req.usersCollection = usersCollection;
//     next();
// });

app.use(express.static('./dist/dating101'));


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'dist/dating101/' })
});

app.use('/users', (req, res, next) => {
        const usersCollection = req.app.locals["users"];
        req.usersCollection = usersCollection;
        next();
    },
    userRoute);
app.use('/users', userRoute);

app.listen(process.env.PORT || 8000);