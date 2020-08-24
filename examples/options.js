const Parser = require('..');
const radioStation = new Parser({
  url: 'https://live.hunter.fm/80s_high', // URL to radio station
  keepListen: false, // don't listen radio station after metadata was received
  autoUpdate: true, // update metadata after interval
  notifyOnChangeOnly: true, // notify if metadata really changed
  errorInterval: 10 * 60, // retry connection after 10 minutes
  emptyInterval: 5 * 60, // retry get metadata after 5 minutes
  metadataInterval: 5 // update metadata after 5 seconds
});

radioStation.on('metadata', metadata => console.log(metadata.StreamTitle));
