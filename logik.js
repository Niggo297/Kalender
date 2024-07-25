const date = new Date();
const month = date.getMonth() + 1;
const year = date.getYear() + 1900;

let germandate = date.toLocaleDateString("de-DE");
document.getElementById("dateD").innerText = germandate;
function richtigesDatumAusgeben(){
dateD.innerText = `${date.getDate()}.${date.getMonth() +1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1}.${date.getFullYear()}`
}
richtigesDatumAusgeben()
// document.getElementById("dateD").innerText = date
// test= date.getDate()
// console.log(test)

let weekdayD = date.getDay();
let weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
let weekdayName = weekdays[weekdayD];
document.getElementById("weekday").innerText = weekdayName;

//  let month = date.getMonth() ;
// document.getElementById("monthD").innerText = months;

// let months = [
//   "Januar",
//   "Februar",
//   "März",
//   "April",
//   "Mai",
//   "Juni",
//   "Juli",
//   "August",
// ];
// let monthNow = months[month];
// document.getElementById("monthD").innerText = monthNow;

//  let year = date.getFullYear();
document.getElementById("year").innerText = year;
// wenn der Wert von 1-7 ist muss es sich ja um den ersten Tag in der Woche halten( bei 7)
let wochedatum = new Date();
let woche = wochedatum.getDay();
if (woche < 8) {
  document.getElementById("weekInMonth").innerText = "erste";
}
if (woche < 15) {
  document.getElementById("weekInMonth").innerText = "zweite";
}

if (woche < 22) {
  document.getElementById("weekInMonth").innerText = "dritte";
}
if (woche < 29) {
  document.getElementById("weekInMonth").innerText = "vierte";
}

if (woche >= 29) {
  document.getElementById("weekInMonth").innerText = "fünfte";
}

// let weekdays = [ "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]

//    let januar =  for ( let i = 1 ; i <=31 ; i++)
//         console.log(i)

// Die schleife geht die liste solange durch bis die i = todayheute ist also der heutige Tag als Zahl.
//dann sagen wir dem elementen welches die liste gefunden hat, dass es dem eine id="today" geben soll
// die css funktionn macht die farbe rot
todaydate= date.getDate()
let tdlist = document.getElementsByTagName("td");
for (let i = 0; i < tdlist.length; i++) {
  if (tdlist[i].innerText == todaydate) {
    tdlist[i].setAttribute("id", "today");
  }
}

//Eine weitere möglichkeit um die Wochentage anzeigen zu lassen
//date.getDay gibt immer die Zahl des Monats wieder
//  let übungsindex = date.getDay();
//  function index (){
//    if(übungsindex == 0){
//       return "Sonntag"
//    }

//    if(übungsindex == 1){
//       return "Montag"
//    }

//    if(übungsindex == 2){
//       return "Dienstag"
//    }

//    if(übungsindex == 3){
//       return "Mittwoch"
//    }
//    if(übungsindex == 4){
//       return "Donnerstag"
//    }

//    if(übungsindex == 5){
//       return "Freitag"
//    }

//    if(übungsindex == 6){
//       return "Samstag"
//    }

// }
