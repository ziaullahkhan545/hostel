const { json } = require('body-parser');
const express = require('express');
const User = require('../models/users');
const router = new express.Router();

// admin login
router.post('/api/admin/login', async (req, res) => {
    try {
        console.log(req.body);
        const result = await User.find({ $and: [{ $or: [{username: req.body.username}, {email: req.body.email}]} ,{password: req.body.password}]});
        console.log('Length: ',result.length)
        if (result.length == 0) {
            res.status(404).send(JSON.stringify({message: "invalid credentials"}))
        } else {
            res.status(200).send(JSON.stringify({message: "success"}));
        }
    } catch(error) {     
        res.status(500).send({message: "something went wrong, try again"});
    }
})

module.exports = router;