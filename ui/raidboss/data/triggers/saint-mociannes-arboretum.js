'use strict';

[{
  zoneRegex: /^Saint Mocianne's Arboretum$/,
  timelineFile: 'saint-mociannes-arboretum.txt',
  triggers: [
    {
      id: 'Rose Garden Vine Probe',
      regex: /:146C/,
      delaySeconds: 15,
      infoText: {
        en: 'Get behind the boss',
      },
    }
  ],
}];
