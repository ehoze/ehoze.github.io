var zamkniecie = document.getElementById("hamburger").style.visibility="hidden";
var odn1 = document.getElementById("l1").style.visibility="hidden";
var odn2 = document.getElementById("l2").style.visibility="hidden";
var odn3 = document.getElementById("l3").style.visibility="hidden";
var odn4 = document.getElementById("l4").style.visibility="hidden";
var odn5 = document.getElementById("l5").style.visibility="hidden";


const title = "Eryk Kucharski";
var z = 0;

console.log(z);

    var h = document.createElement("H1");
    // document.body.appendChild(h);
    document.getElementById("Slicer").appendChild(h);


var menu = document.getElementById("menu").style.visibility="hidden";
var resultx = document.getElementById("menu").style.animationPlayState="paused";

function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function movement()
{
  
  var menu = document.getElementById("menu").style.visibility="visible";
  resultx = document.getElementById("menu").style.animationPlayState="running";
  var menuanimation = document.getElementById("menu").style.animation="menumovement 1s 1";
  var width = document.getElementById("menu").style.right="31%";
  await sleep(200);
 
  document.getElementById("hamburger").style.visibility="visible";
  await sleep(150);
  loadfirst();
  await sleep(100);
  loadsecond();
  await sleep(100);
  loadthird();
  await sleep(100);
  loadfourth();
  await sleep(100);
  loadfifth();
  z = 0;
  await sleep(300)
  function sliceText()
  {
      var y = z + 1;
      var t = document.createTextNode(title.slice(z,y)); 
      h.appendChild(t); 
      z++;    
      //document.body.innerHTML = title.slice(0,z);
  
      if(z == title.length + 1)
      {
          console.log(z);
          
      }
  }
  
  setInterval(sliceText, 100);
}

async function movementr()
{
  odn1 = document.getElementById("l1").style.visibility="hidden";
  await sleep(80);
  odn2 = document.getElementById("l2").style.visibility="hidden";
  await sleep(80);
  odn3 = document.getElementById("l3").style.visibility="hidden";
  await sleep(80);
  odn4 = document.getElementById("l4").style.visibility="hidden";
  await sleep(80);
  odn5 = document.getElementById("l5").style.visibility="hidden";
  await sleep(80);


  resultx = document.getElementById("menu").style.animationPlayState="running";
  var menuanimation = document.getElementById("menu").style.animation="menumovementr 1s 1";
  var width = document.getElementById("menu").style.right="-600px";
  document.getElementsByTagName("H1")[0].innerHTML = "";
  await sleep(100);
  document.getElementById("hamburger").style.visibility="hidden";
  
}

function loadfirst()
{
  odn1 = document.getElementById("l1").style.visibility="visible";
}

function loadsecond()
{
  odn2 = document.getElementById("l2").style.visibility="visible";
}

function loadthird()
{
  odn3 = document.getElementById("l3").style.visibility="visible";
}

function loadfourth()
{
  odn4 = document.getElementById("l4").style.visibility="visible";
}

function loadfifth()
{
  odn5 = document.getElementById("l5").style.visibility="visible";
}






