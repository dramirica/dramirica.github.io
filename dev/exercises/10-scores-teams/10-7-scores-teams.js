/* 
TRACK A TEAM AND SEE THEY RESULTS VS OTHER TEAMS
by MDN Data Software - Mirica Dragos-Neculai
v 1.0/10.01.2021.10.41
*/
const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Escobar",
      age: 70,
    },
    {
      firstName: "Santa Maria De La",
      lastName: "Muerte",
      age: 7000,
    },
    {
      firstName: "Gesu",
      lastName: "Cristoforo Colombo",
      age: 2000,
    },
  ],
  _games: [
    {
      opponent: "BANANOS",
      teamPoints: 69,
      opponentPoints: 49,
    },
    {
      opponent: "Birbonin",
      teamPoints: 33,
      opponentPoints: 46,
    },
    {
      opponent: "Eucoplastics",
      teamPoints: 0,
      opponentPoints: 0,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    this._players.push({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
  },
  addGame(opponent, tpoints, opoints) {
    this._games.push({
      opponent: opponent,
      teamPoints: tpoints,
      opponentPoints: opoints,
    });
  },
};

//Add players to the team
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team._players);

//Add matches
team.addGame("Scacchi", 55, 33);
console.log(team._games);
