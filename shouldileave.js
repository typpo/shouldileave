var distance = require('google-distance');

distance.get({
  origin: '2339 3rd St, San Francisco, CA',
  destination: '190 Gladys Ave, Mountain View, CA',
}, function(err, data) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  console.log(parseInt(data.durationValue/60) + ' min');
});
