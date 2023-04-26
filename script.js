function Zeit() {

  var Tage = new Date().getDate() ;
  var Monate = new Date().getMonth() + 1;
  if (Tage <= 9) {
    var Tage = "0" + Tage;
  }
  if (Monate <= 9) {
    var Monate = "0" + Monate;
  }
  var Datum = Tage + "." + Monate;
  


  var Wochentag = new Date().getDay();
  if (Wochentag == "1") {
    Wochentag = "Mo"
  } else {
  if (Wochentag == "2") {
    Wochentag = "Di"
  } else {
  if (Wochentag == "3") {
    Wochentag = "Mi"
  } else {
  if (Wochentag == "4") {
    Wochentag = "Do"
  } else {
  if (Wochentag == "5") {
    Wochentag = "Fr"
  } else {
  if (Wochentag == "6") {
    Wochentag = "Sa"
  } else {
  if (Wochentag = "7") {
    Wochentag = "So"
  } else {
    
  }
}}}}}}

  document.getElementById("Wochentag_Datum").innerHTML = Wochentag + ", " + Datum;

  
  
  
  var Stunden = new Date().getHours();
  var Minuten = new Date().getMinutes();































  if (Stunden <= 9) {
    var Stunden = "0" + Stunden;
  }
  if (Minuten <= 9) {
    var Minuten = "0" + Minuten;
  }

  //document.getElementById("Stunden").innerHTML = Stunden;
  //document.getElementById("Minuten").innerHTML = Minuten;



  var Uhrzeit = Stunden + "&nbsp;" + Minuten

  document.getElementById("Minuten_Stunden").innerHTML = Uhrzeit;

  
  
  //Minuten = "35"
  
  //document.getElementById("Stunden").innerHTML = Stunden;
  //document.getElementById("Minuten").innerHTML = Minuten;
  
  

  var verschiebung00_aktiv = false;
  var verschiebung01_aktiv = false;
  var verschiebung02_aktiv = false;
  var verschiebung03_aktiv = false;
  var verschiebung04_aktiv = false;
  var verschiebung05_aktiv = false;
  var verschiebung06_aktiv = false;
  var verschiebung07_aktiv = false;
  var verschiebung08_aktiv = false;
  var verschiebung09_aktiv = false;
  var verschiebung10_aktiv = false;
  var verschiebung11_aktiv = false;
  var verschiebung12_aktiv = false;
  var verschiebung13_aktiv = false;
  var verschiebung14_aktiv = false;
  var verschiebung15_aktiv = false;
  var verschiebung16_aktiv = false;
  var verschiebung17_aktiv = false;
  var verschiebung18_aktiv = false;
  var verschiebung19_aktiv = false;
  var verschiebung20_aktiv = false;
  var verschiebung21_aktiv = false;
  var verschiebung22_aktiv = false;
  var verschiebung23_aktiv = false;

  var verschiebung00 = document.getElementsByTagName('body');
  var verschiebung01 = document.getElementsByTagName('body');
  var verschiebung02 = document.getElementsByTagName('body');
  var verschiebung03 = document.getElementsByTagName('body');
  var verschiebung04 = document.getElementsByTagName('body');
  var verschiebung05 = document.getElementsByTagName('body');
  var verschiebung06 = document.getElementsByTagName('body');
  var verschiebung07 = document.getElementsByTagName('body');
  var verschiebung08 = document.getElementsByTagName('body');
  var verschiebung09 = document.getElementsByTagName('body');
  var verschiebung10 = document.getElementsByTagName('body');
  var verschiebung11 = document.getElementsByTagName('body');
  var verschiebung12 = document.getElementsByTagName('body');
  var verschiebung13 = document.getElementsByTagName('body');
  var verschiebung14 = document.getElementsByTagName('body');
  var verschiebung15 = document.getElementsByTagName('body');
  var verschiebung16 = document.getElementsByTagName('body');
  var verschiebung17 = document.getElementsByTagName('body');
  var verschiebung18 = document.getElementsByTagName('body');
  var verschiebung19 = document.getElementsByTagName('body');
  var verschiebung20 = document.getElementsByTagName('body');
  var verschiebung21 = document.getElementsByTagName('body');
  var verschiebung22 = document.getElementsByTagName('body');
  var verschiebung23 = document.getElementsByTagName('body');
  
  if (Stunden == 00  ){
    verschiebung00_aktiv = true;
    verschiebung00[0].classList.add('verschiebung00_aktiv');
  }
  else {
    verschiebung00_aktiv = false;
    verschiebung00[0].classList.remove('verschiebung00_aktiv');
  }


  if (Stunden == 01  ){
    verschiebung01_aktiv = true;
    verschiebung01[0].classList.add('verschiebung01_aktiv');
  }
  else {
    verschiebung01_aktiv = false;
    verschiebung01[0].classList.remove('verschiebung01_aktiv');
  }


  if (Stunden == 02  ){
    verschiebung02_aktiv = true;
    verschiebung02[0].classList.add('verschiebung02_aktiv');
  }
  else {
    verschiebung02_aktiv = false;
    verschiebung02[0].classList.remove('verschiebung02_aktiv');
  }

  
  if (Stunden == 03  ){
    verschiebung03_aktiv = true;
    verschiebung03[0].classList.add('verschiebung03_aktiv');
  }
  else {
    verschiebung03_aktiv = false;
    verschiebung03[0].classList.remove('verschiebung03_aktiv');
  }

  
  if (Stunden == 04  ){
    verschiebung04_aktiv = true;
    verschiebung04[0].classList.add('verschiebung04_aktiv');
  }
  else {
    verschiebung04_aktiv = false;
    verschiebung04[0].classList.remove('verschiebung04_aktiv');
  }

  
  if (Stunden == 05  ){
    verschiebung05_aktiv = true;
    verschiebung05[0].classList.add('verschiebung05_aktiv');
  }
  else {
    verschiebung05_aktiv = false;
    verschiebung05[0].classList.remove('verschiebung05_aktiv');
  }
  

  if (Stunden == 06  ){
    verschiebung06_aktiv = true;
    verschiebung06[0].classList.add('verschiebung06_aktiv');
  }
  else {
    verschiebung06_aktiv = false;
    verschiebung06[0].classList.remove('verschiebung06_aktiv');
  }
  

  if (Stunden == 07  ){
    verschiebung07_aktiv = true;
    verschiebung07[0].classList.add('verschiebung07_aktiv');
  }
  else {
    verschiebung07_aktiv = false;
    verschiebung07[0].classList.remove('verschiebung07_aktiv');
  }

  if (Stunden == 08  ){
    verschiebung08_aktiv = true;
    verschiebung08[0].classList.add('verschiebung08_aktiv');
  }
  else {
    verschiebung08_aktiv = false;
    verschiebung08[0].classList.remove('verschiebung08_aktiv');
  }

  if (Stunden == 09  ){
    verschiebung09_aktiv = true;
    verschiebung09[0].classList.add('verschiebung09_aktiv');
  }
  else {
    verschiebung09_aktiv = false;
    verschiebung09[0].classList.remove('verschiebung09_aktiv');
  }
  

  if (Stunden == 10  ){
    verschiebung10_aktiv = true;
    verschiebung10[0].classList.add('verschiebung10_aktiv');
  }
  else {
    verschiebung10_aktiv = false;
    verschiebung10[0].classList.remove('verschiebung10_aktiv');
  }
  
  if (Stunden == 11  ){
    verschiebung11_aktiv = true;
    verschiebung11[0].classList.add('verschiebung11_aktiv');
  }
  else {
    verschiebung11_aktiv = false;
    verschiebung11[0].classList.remove('verschiebung11_aktiv');
  }
  
  if (Stunden == 12  ){
    verschiebung12_aktiv = true;
    verschiebung12[0].classList.add('verschiebung12_aktiv');
  }
  else {
    verschiebung12_aktiv = false;
    verschiebung12[0].classList.remove('verschiebung12_aktiv');
  }
  
  if (Stunden == 13  ){
    verschiebung13_aktiv = true;
    verschiebung13[0].classList.add('verschiebung13_aktiv');
  }
  else {
    verschiebung13_aktiv = false;
    verschiebung13[0].classList.remove('verschiebung13_aktiv');
  }
  
  if (Stunden == 14  ){
    verschiebung14_aktiv = true;
    verschiebung14[0].classList.add('verschiebung14_aktiv');
  }
  else {
    verschiebung14_aktiv = false;
    verschiebung14[0].classList.remove('verschiebung14_aktiv');
  }
  
  if (Stunden == 15  ){
    verschiebung15_aktiv = true;
    verschiebung15[0].classList.add('verschiebung15_aktiv');
  }
  else {
    verschiebung15_aktiv = false;
    verschiebung15[0].classList.remove('verschiebung15_aktiv');
  }
  
  if (Stunden == 16  ){
    verschiebung16_aktiv = true;
    verschiebung16[0].classList.add('verschiebung16_aktiv');
  }
  else {
    verschiebung16_aktiv = false;
    verschiebung16[0].classList.remove('verschiebung16_aktiv');
  }
  
  if (Stunden == 17  ){
    verschiebung17_aktiv = true;
    verschiebung17[0].classList.add('verschiebung17_aktiv');
  }
  else {
    verschiebung17_aktiv = false;
    verschiebung17[0].classList.remove('verschiebung17_aktiv');
  }
  
  if (Stunden == 18  ){
    verschiebung18_aktiv = true;
    verschiebung18[0].classList.add('verschiebung18_aktiv');
  }
  else {
    verschiebung18_aktiv = false;
    verschiebung18[0].classList.remove('verschiebung18_aktiv');
  }
  
  if (Stunden == 19  ){
    verschiebung19_aktiv = true;
    verschiebung19[0].classList.add('verschiebung19_aktiv');
  }
  else {
    verschiebung19_aktiv = false;
    verschiebung19[0].classList.remove('verschiebung19_aktiv');
  }  
  if (Stunden == 20  ){
    verschiebung20_aktiv = true;
    verschiebung20[0].classList.add('verschiebung20_aktiv');
  }
  else {
    verschiebung20_aktiv = false;
    verschiebung20[0].classList.remove('verschiebung20_aktiv');
  }  
  if (Stunden == 21  ){
    verschiebung21_aktiv = true;
    verschiebung21[0].classList.add('verschiebung21_aktiv');
  }
  else {
    verschiebung21_aktiv = false;
    verschiebung21[0].classList.remove('verschiebung21_aktiv');
  }  
  if (Stunden == 22  ){
    verschiebung22_aktiv = true;
    verschiebung22[0].classList.add('verschiebung22_aktiv');
  }
  else {
    verschiebung22_aktiv = false;
    verschiebung22[0].classList.remove('verschiebung22_aktiv');
  }  
  if (Stunden == 23  ){
    verschiebung23_aktiv = true;
    verschiebung23[0].classList.add('verschiebung23_aktiv');
  }
  else {
    verschiebung23_aktiv = false;
    verschiebung23[0].classList.remove('verschiebung23_aktiv');
  }




    var Sekunden = new Date().getSeconds();
  }  
  
  var sekunden_aktiv = false;
  var sekunden = document.getElementsByTagName('body');

    let vergangenezeit = new Date().getSeconds()
    function sekundenanzeige() {
      vergangenezeit++;
      //console.log(vergangenezeit)
      if(sekunden_aktiv == false){
        sekunden_aktiv = true;
        sekunden[0].classList.add('sekunden_aktiv');}
        else{
          sekunden_aktiv = false;
          sekunden[0].classList.remove('sekunden_aktiv');
        }
      }
      setInterval(sekundenanzeige, 500);
      
      section = document.querySelector("section");
      logo = document.getElementById("Apple_Logo");
FPS = 60;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// Logo moving velocity Variables
xPosition = 785;
yPosition = 120;
xSpeed = 1;
ySpeed = 1;
function update() {
  
  logo.style.left = xPosition + "px";
  logo.style.top = yPosition + "px";
  }
setInterval(() => {
 
  if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
    
  }
  if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;    
  }
  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
  Zeit();
}, 1000 / FPS)
window.addEventListener("resize", () => {
  xPosition = 10;
  yPosition = 10;
  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});
var ud_active_status = false;
var ud_button = document.getElementById('Apple_Logo');
ud_button.addEventListener('click', ud_button_click, false);
var ud_objekt = document.getElementsByTagName('body');

function ud_button_click() {

  var ud_objekt = document.getElementsByTagName('body');
  //xSpeed = 0
  //ySpeed = 0
  
    if(ud_active_status == false){
    ud_active_status = true;
     ud_objekt[0].classList.add('ud_active');
    window.addEventListener("resize", () => {
      xPosition = 10;
      yPosition = 10;
      section.style.height = window.innerHeight + "px";
      section.style.width = window.innerWidth + "px";
    });
    } else{
      ud_active_status = false;
      ud_objekt[0].classList.remove('ud_active');
 }
}




random_background()
function random_background() {
  var random = Math.round(38 * Math.random()) + 1;
  console.log(random)
  document.getElementById("background").src='Bilder/' + random + '.jpg'  
}



setInterval(() => {
  random_background()
},600000)
// Alle 10 Min. (Nur wenn aktiv)