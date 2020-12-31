const express =require('express');
const router = express.Router();
const Country = require('../models/Country')
const {ensureAuthenticated} = require('../config/auth') 

router.get('/', async (req,res) => {
    try {
        const countries = await Country.find();
        res.json(countries); 
    } catch(err) {
        res.json({message: err});
    }
    
})

router.get('/list' ,async (req,res) => {
    const countries = await Country.find();
    res.render('countries/index',{countries : countries})
})

router.post('/', async (req,res) => {
    const country = new Country({
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
        res.render('countries/show',{country: country});
    } catch(error) {
        console.log(error);
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
router.get('/edit/:id', ensureAuthenticated,async (req, res) => {
    const country = await Country.findById(req.params.id)
    res.render('countries/edit', { country: country })
  })


  router.patch('/:countryId', async (req,res) => {
    try {
        const updatedCountry = await Country.updateOne(
            {_id:req.params.countryId},
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