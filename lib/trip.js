var distance = require('google-distance');

function check(from, to, threshold, thresholdReachedCallback) {
  distance.get({
    origin: from,
    destination: to,
  }, function(err, data) {
    if (err) {
      console.error('Error:', err);
      return;
    }

    var durationInMinutes = parseInt(data.durationValue/60);
    console.log(durationInMinutes + ' min');

    if (durationInMinutes <= threshold) {
      thresholdReachedCallback(durationInMinutes);
    }
  });
}

module.exports = {
  check: check,
};
