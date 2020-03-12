const {nextISSTimesForMyLocation} = require('./iss');

const ISSPassTimes = function(passTimes) {
  for (let element of passTimes) {
    let date = new Date(0);
    date.setUTCSeconds(element.risetime);
    let duration = element.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  ISSPassTimes(passTimes);
});

module.exports = ISSPassTimes;