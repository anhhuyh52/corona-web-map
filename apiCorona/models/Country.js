const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
    updated: {
        type: Number,
        require: true,
    },
    country: {
        type: String,
        require:true,
    },
    countryInfo: {
        _id:{
            type: Number,
            require: true,
        },
        iso2: {
            type: String,
            require:true,
        },
        iso3: {
            type: String,
            require:true,
        },
        lat:{
            type: Number,
            require: true,
        },
        long:{
            type: Number,
            require: true,
        },
        flag: {
            type: String,
            require:true,
        },
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
    continent: {
        type: String,
        require:true,
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
})

module.exports = mongoose.model('Country',CountrySchema);