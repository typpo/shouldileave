var commander = require('commander');
var trip = require('./lib/trip');

commander
  .version('0.0.1')
  .usage('shouldileave --from <start location> --to <destination> --notify <minutes>')
  .option('-f, --from <loc>', 'from location')
  .option('-t, --to <loc>', 'to location')
  .option('-n, --notify <threshold>', 'notification threshold, in minutes', parseInt)
  .parse(process.argv);

if (!commander.from || !commander.to || !commander.notify) {
  commander.help();
  process.exit(1);
}

trip.check(commander.from, commander.to, commander.notify, function(duration) {
  // Notify!
  console.log('**************************************************************');
  console.log('Threshold met: ' + duration + ' minutes for your trip');
  console.log('**************************************************************');
});
