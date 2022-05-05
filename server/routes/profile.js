const express = require('express');
const Profile = require('../models/profile');
const { userTable } = require('../models/user');
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const profiles = await Profile.getDogs();
        res.send(profiles);
    } catch (err) {
        res.status(401).send({message: error.message});
    }
})

.post('/create', async (req,res) => {
    try {
        const profile = await Profile.create(req.body);
        console.log(profile)
        res.send({...profile})
    } catch(error) {
        res.status(401).send({message:error.message});
    }
})

.delete('/delete', async (req,res) => {
    try {
        await Profile.deleteProfile(req.body.dogId);
        res.send({success: "We'll miss you..."});
    } catch(error) {
        res.status(401).send({message: error.message})
    }
}

.put('/edit',async (req,res) => {
    try {
        const profile = await Profile.editProfile(req.body);
        console.log(profile)
        res.send({...profile});

    } catch(error) {
        res.status(401).send({message: error.message})
    }
})

module.exports = router;