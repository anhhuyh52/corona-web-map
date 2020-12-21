const accessToken = process.env.GATSBY_MAPBOX_KEY;

export const mapServices = [
  {
    name: 'OpenStreetMap',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'Mapbox',
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: `https://api.mapbox.com/styles/v1/anhhuy/ckg6elsff37tp19obr1gps0s6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5oaHV5IiwiYSI6ImNraHczcDhubDA0eTkydm5icjY4eXJuMzkifQ.zkazpn0Aqo24INtsnEmQuA`,
  },
];
