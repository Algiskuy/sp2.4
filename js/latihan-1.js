var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

document.write("Hasil", "<br>");
var data = personnel.map((item) => {
  document.write(`<br> 
    Id : ${item.id}<br>
    Nama : ${item.name}<br>
    PilotingScore : ${item.pilotingScore}<br>
    ShootingScore : ${item.shootingScore}<br> 
    IsForeuser : ${item.isForceUser}<br>    
    `);
  if (item.isForceUser === true)
    data = document.write(
      `totalscore : ${item.pilotingScore + item.shootingScore}`
    );

  document.write("<br>");
});

let hasil = personnel.filter((pilot) => pilot.isForceUser === true);
let totalscore = hasil.reduce(
  (acc, pilot) => acc + pilot.pilotingScore + pilot.shootingScore,
  0
);

document.write("<br>");
document.write(data.join(""));
document.write(` <br> Total Score Force User Member : ${totalscore}`);

// total : ${item.pilotingScore + item.shootingScore}<br></br>

// const forceUser = personnel.filter(pilot => pilot.isForceUser === true)
// const totalScoreForceUser = forceUser.reduce((acc,pilot)=>acc+pilot.pilotingScore + pilot.shootingScore,0)

// let pilot = personnel.map(function(item){

//   let data = document.write(`
//   <br>
//   ID : ${item.id} <br>
//   Name : ${item.name} <br>
//   PIlotingScore : ${item.pilotingScore} <br>
//   IsForseUser : ${item.isForceUser}
//   <br>
//   `)

//   if (item).isForceUser === true){
//     data = document.write(`<b>Total Score: ${item.pilotingScore + item.shootingScore}</b> <br>`)
//     return data;
//   }
//   return data;
// })
// document.write('<br>')
// document.write(pilot.join(''))
// document.write(`<br>Total Score Force User Member: ${totalScoreForceUser}`)
