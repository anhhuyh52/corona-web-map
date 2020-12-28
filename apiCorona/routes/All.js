const express =require('express');
const router = express.Router();
const All = require('../models/All');
const {ensureAuthenticated} = require('../config/auth') 

router.get('/', async (req,res) => {
    try {
        const allWorld = await All.find();
        res.json(allWorld[0]); 
    } catch(err) {
        res.json({messag: err});
    }
})

router.post('/', async (req,res) => {
    const all = new All({
        updated : req.body.updated,
cases : req.body.cases,
todayCases : req.body.todayCases,
deaths : req.body.deaths,
todayDeaths :req.body.todayDeaths,
recovered : req.body.recovered,
todayRecovered :req.body.todayRecovered,
active : req.body.active,
critical : req.body.critical,
casesPerOneMillion :req.body.casesPerOneMillion,
deathsPerOneMillion : req.body.deathsPerOneMillion,
tests :req.body.deaths,
testsPerOneMillion :req.body.deaths,
population :req.body.deaths,
oneCasePerPeople :req.body.deaths,
oneDeathPerPeople :req.body.deaths,
oneTestPerPeople :req.body.deaths,
activePerOneMillion :req.body.deaths,
recoveredPerOneMillion :req.body.deaths,
criticalPerOneMillion :req.body.deaths,
affectedCountries : req.body.deaths,})
    try {
        const savedAll = await all.save();
        res.json(savedAll)
    } catch (err) {
        res.json({message :err})
    }

})

router.get('/:allId',async (req,res) => {
    try {
        const all = await All.findById(req.params.allId);
        res.render('all/show',{all: all});
    } catch(error) {
        console.log(error);
    }
})

router.get('/edit/:id',ensureAuthenticated, async (req, res) => {
    const all = await All.findById(req.params.id)
    res.render('All/edit', { all: all })
  })


router.patch('/:allId', async (req,res) => {
    try {
        const updatedAll = await All.updateOne(
            {_id:req.params.allId},
            {$set : {
        cases: req.body.cases,
        deaths: req.body.deaths,
        recovered: req.body.recovered,
        tests: req.body.tests,
            }}
            );
            res.redirect(`/`);
    } catch (err) {
        res.json({message:err})
    }
})
module.exports = router;