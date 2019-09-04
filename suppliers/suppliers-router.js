const express = require('express');

const router = express.Router();

function uppercaser(req, res, next) {
    let name = req.params.name

    if(name) {
        req.name = name.toUpperCase()
    }

    next()
}

router.use(express.json());

router.get('/', (req, res) => {
    res.send('get to /suppliers/');
});

router.get('/:name', uppercaser, (req, res) => {
    res.send(`git to /suppliers/${req.name}`);
});

module.exports = router; 