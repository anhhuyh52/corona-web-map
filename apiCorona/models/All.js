const mongoose = require('mongoose')

const AllSchema = mongoose.Schema({
    updated:{
        type: Number,
        require: true,
    },
    cases:{
        type: Number,
        require: true,
    },
    todayCases:{
        type: Number,
        require: true,
    },
    deaths:{
        type: Number,
        require: true,
    },
    todayDeaths:{
        type: Number,
        require: true,
    },
    recovered:{
        type: Number,
        require: true,
    },
    todayRecovered:{
        type: Number,
        require: true,
    },
    active:{
        type: Number,
        require: true,
    },
    critical:{
        type: Number,
        require: true,
    },
    casesPerOneMillion:{
        type: Number,
        require: true,
    },
    deathsPerOneMillion:{
        type: Number,
        require: true,
    },
    tests:{
        type: Number,
        require: true,
    },
    testsPerOneMillion:{
        type: Number,
        require: true,
    },
    population:{
        type: Number,
        require: true,
    },
    oneCasePerPeople:{
        type: Number,
        require: true,
    },
    oneDeathPerPeople:{
        type: Number,
        require: true,
    },
    oneTestPerPeople:{
        type: Number,
        require: true,
    },
    activePerOneMillion:{
        type: Number,
        require: true,
    },
    recoveredPerOneMillion:{
        type: Number,
        require: true,
    },
    criticalPerOneMillion:{
        type: Number,
        require: true,
    },
    affectedCountries:{
        type: Number,
        require: true,
    },
})

module.exports = mongoose.model('All',AllSchema)