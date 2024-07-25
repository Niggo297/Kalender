
// const dateD = document.getElementById("dateD");
// const dateD = document.getElementsByClassName("weekdayD");
// const weekInMonth = document.getElementById("weekInMonth");
// const monthD = document.getElementById("monthD");
// const year = document.getElementById("year");
// const holidayYesNoD = document.getElementById("holidayYesNoD");

// function ausgeben() {
//    // dateD.innerText = date.getDate() + "." + date.getDay() + "." + date.getFullYear() dollar Zeichen +  backticks ermöglichen etwas dynamsiches mit etwas statischem 
// dateD.innerText = `${date.getDate()}.${date.getMonth() +1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1}.${date.getFullYear()}`
// };
 
// ausgeben();

// condition? true:false 
// Möglichkeit 1
// date.getMonth() +1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1
// Möglichkeit 2
// `${date.getMonth() +1 < 10 ? '0': ''}${date.getMonth()+1}´
//Möglichkeit 3 
// let monthUpdate = date.getMonth()+1 
//  if (monthUpdate < 10 ){ 
//     monthUpdate =  `0${monthUpdate}`
// }
//Möglichkeiten 1 - 3 wird an der function ausgeben eingefügt: es sorgt dafür dass bei getMonth eine 0 vor dem Monat angezeigt wird, solange bis Oktober (Monat 10) kommt 
// .${date.getMonth() +1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1}


   let shortdate = new Date ().toDateString()
   let date = new Date()
   document.getElementById("dateD").innerText = shortdate;
   
   let weekdayD = date.getDay();
   let weekdays =['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
   let weekdayName = weekdays[weekdayD];
   document.getElementById("weekday").innerText = weekdayName;

 let month = date.getMonth() ;
 document.getElementById("monthD").innerText = month;

 let months = ["Januar" ,"Februar" ,"März" ,"April", "Mai" ,"Juni", "Juli" , "August"]
 let monthNow = months[month]
 document.getElementById("monthD").innerText = monthNow;

 let year = date.getFullYear();
 document.getElementById("year").innerText = year;
 
let wochedatum= new Date()
 let woche = wochedatum.getDay()
if (woche <8){
   document.getElementById("weekInMonth").innerText = "erste"
};
if (woche <15){
     document.getElementById("weekInMonth").innerText = "zweite"
}

if (woche <22){
     document.getElementById("weekInMonth").innerText = "dritte"
}
if (woche <29){
     document.getElementById("weekInMonth").innerText = "vierte"
}

if (woche >=29){
     document.getElementById("weekInMonth").innerText = "fünfte"
}


// eine Schleife die alle elemente in tdlist durchgehht
//und mit dem heutigen Datum vergleicht / test.getDate gibt eine Zahl wieder
 test = new Date ()
 todaydate = test.getDate();

 let tdlist = document.getElementsByTagName("td");
//  console.log(tdlist[1].innerText)
 for(let i = 0;  i < tdlist.length ; i ++){
   if(tdlist[i].innerText == todaydate ){
       tdlist[i].setAttribute("id", "today")
   }
 };
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





