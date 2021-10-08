const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).json({
            message: "Username, email and password can not be empty."
        });
    } else {
        const payload = { username, email, password };
        console.log("Adding User...");
        req.usersCollection.insertOne(payload)
            .then(result => {
                let payload = { subject: result._id };
                let token = jwt.sign(payload, 'secretkey');
                res.status(200).send({ token })
            })
            .catch(err => res.status(400).json({ message: 'Something went wrong.' }));
    }
});

router.get('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        res.status(400).json({
            message: 'Username and password can not be empty.'
        })
    } else {
        req.usersCollection.findOne({
                username: username
            })
            .then(user => {
                if ((!user) || (user.password !== password)) {

                    res.status(400).json({
                        message: 'Username or Password Incorrect'
                    })

                } else if ((user) && (user.password === password)) {

                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, 'secretkey');

                    res.status(200).send({ token });

                    console.log(`${user.username} logged in successfully.`);
                }
            })
            .catch(err => {
                console.log(`Error Occurred: ${err}`);
            })
    }
})

module.exports = router;