const {nextISSTimesForMyLocation} = require('./iss_promised');
const ISSPassTimes = require('./index');

nextISSTimesForMyLocation()
  .then((passTimes) => ISSPassTimes(passTimes))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
