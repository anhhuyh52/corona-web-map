const express =require('express');
const router = express.Router();
const Country = require('../models/Country')

router.get('/', async (req,res) => {
    try {
        const coutries = await Country.find();
        res.json(coutries); 
    } catch(err) {
        res.json({message: err});
    }
    
})

router.post('/', async (req,res) => {
    const country = new Country({
        updated: req.body.updated,
        country: req.body.country,
        countryInfo:req.body.countryInfo,
        cases: req.body.cases,
        todayCases: req.body.todayCases,
        deaths: req.body.deaths,
        todayDeaths: req.body.todayDeaths,
        recovered: req.body.recovered,
        todayRecovered: req.body.todayRecovered,
        active: req.body.active,
        critical: req.body.critical,
        casesPerOneMillion: req.body.casesPerOneMillion,
        deathsPerOneMillion: req.body.deathsPerOneMillion,
        tests: req.body.tests,
        testsPerOneMillion: req.body.testsPerOneMillion,
        population: req.body.population,
        continent: req.body.continent,
        oneCasePerPeople: req.body.oneCasePerPeople,
        oneDeathPerPeople: req.body.oneDeathPerPeople,
        oneTestPerPeople: req.body.oneTestPerPeople,
        activePerOneMillion: req.body.activePerOneMillion,
        recoveredPerOneMillion: req.body.recoveredPerOneMillion,
        criticalPerOneMillion: req.body.criticalPerOneMillion,
    });

    try {
        const savedCountry = await country.save();
        res.json(savedCountry)
    } catch (err) {
        res.json({message:err})
    }

})

//specific
router.get('/:countryId',async (req,res) => {
    try {
        const country = await Country.findById(req.params.countryId);
        res.json(country);
    } catch(error) {
        res.json({message: err});
    }
})

//delete
router.delete('/:countryId',async (req,res) => {
    try {
        const removedCountry = await Country.remove({_id:req.params.countryId});
        res.json(removedCountry);
    } catch(err) {
        res.json({message: err});
    }
})

//update
router.patch(':/postId', async (req,res) => {
    try {
        const updatedCountry = await Country.updateOne(
            {_id:req.params.countryId},
            {$set : {
                updated: req.body.updated,
        country: req.body.country,
        countryInfo:req.body.countryInfo,
        cases: req.body.cases,
        todayCases: req.body.todayCases,
        deaths: req.body.deaths,
        todayDeaths: req.body.todayDeaths,
        recovered: req.body.recovered,
        todayRecovered: req.body.todayRecovered,
        active: req.body.active,
        critical: req.body.critical,
        casesPerOneMillion: req.body.casesPerOneMillion,
        deathsPerOneMillion: req.body.deathsPerOneMillion,
        tests: req.body.tests,
        testsPerOneMillion: req.body.testsPerOneMillion,
        population: req.body.population,
        continent: req.body.continent,
        oneCasePerPeople: req.body.oneCasePerPeople,
        oneDeathPerPeople: req.body.oneDeathPerPeople,
        oneTestPerPeople: req.body.oneTestPerPeople,
        activePerOneMillion: req.body.activePerOneMillion,
        recoveredPerOneMillion: req.body.recoveredPerOneMillion,
        criticalPerOneMillion: req.body.criticalPerOneMillion
            }}
            );
            res.json(updatedCountry);
    } catch (err) {
        res.json({message:err})
    }
})

module.exports = router;