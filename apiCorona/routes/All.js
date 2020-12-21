const express =require('express');
const router = express.Router();
const All = require('../models/All')

router.get('/', async (req,res) => {
    try {
        const allWorld = {"updated":1608305355317,"cases":75477213,"todayCases":206425,"deaths":1672116,"todayDeaths":4520,"recovered":53022436,"todayRecovered":179925,"active":20782661,"critical":107226,"casesPerOneMillion":9683,"deathsPerOneMillion":214.5,"tests":1134598291,"testsPerOneMillion":145567.61,"population":7794304541,"oneCasePerPeople":0,"oneDeathPerPeople":0,"oneTestPerPeople":0,"activePerOneMillion":2666.39,"recoveredPerOneMillion":6802.72,"criticalPerOneMillion":13.76,"affectedCountries":220};
        res.json(allWorld); 
    } catch(err) {
        res.json({message: err});
    }
    
})


module.exports = router;