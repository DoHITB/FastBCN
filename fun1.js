var idioma = 0; //0: CAS | 1: CAT | 2: ENG
var str = ["Inicio", "Inici", "Home", "Sobre nosotros", "Sobre nosaltres", "About us", "Tarifas", "Tarifes", "Ratings", "Galería", "Galeria", "Gallery", "Redes", "Xarxes", "Networks", "Contacto", "Contacte", "Contact"];
var imgstr = ["<img src='./img/icons/home.png' class='menuicon' />", "<img src='./img/icons/about.png' class='menuicon' />", "<img src='./img/icons/tarifas.png' class='menuicon' />", 
              "<img src='./img/icons/galeria.png' class='menuicon' />", "<img src='./img/icons/redes.png' class='menuicon' />", "<img src='./img/icons/contacto.png' class='menuicon' />"];
var curSec = "";
var isLoad = false;

window.onresize = resize;

function resize(){if(isLoad)location.reload();}

function g(id){return document.getElementById(id);}
function setString(s, k){g(k).innerHTML = s;}
function isOnCurSec(sec){return curSec === sec;}
function setLan(k){
  //cambiamos idioma
  idioma = k;

  //recargamos
  reload();
}

function reload(){
  //actualizamos cabecera
  setString(getString(0), "home");
  setString(getString(1), "about");
  setString(getString(2), "tarifas");
  setString(getString(3), "galeria");
  setString(getString(4), "redes");
  setString(getString(5), "contacto");

  //recargamos la sección
  /*if(isOnCurSec("home")){
    curSec = "";
	home();
  }else */if(isOnCurSec("about")){
    curSec = "";
	about();
  }else if(isOnCurSec("tarifas")){
    curSec = "";
	tarifas();
  }else if(isOnCurSec("galeria")){
    curSec = "";
	galeria();
  }else if(isOnCurSec("redes")){
    curSec = "";
	redes();
  }else if(isOnCurSec("contacto")){
    curSec = "";
	contacto();
  }

  //revisamos colisiones
  if(g('logoh').offsetWidth < g('logohimg').offsetWidth){
    //si el ancho del logo es mayor que el ancho del contenedor, forzamos que sean el mismo
	g('logohimg').style.width = "100%";
  }else{
	g('logohimg').style.width = "";
  }

  if(g('righth').offsetWidth < 85){
	//empiezan a no caber iconos de banderas y redes
	g('iglogo').style.width = "5px";
	g('twlogo').style.width = "5px";
	g('esp').style.width = "5px";
	g('cat').style.width = "5px";
	g('eng').style.width = "5px";  
  }else if(g('righth').offsetWidth < 100){
	//empiezan a no caber iconos de banderas y redes
	g('iglogo').style.width = "10px";
	g('twlogo').style.width = "10px";
	g('esp').style.width = "10px";
	g('cat').style.width = "10px";
	g('eng').style.width = "10px";  
  }else if(g('righth').offsetWidth < 115){
	//empiezan a no caber iconos de banderas y redes
    g('iglogo').style.width = "15px";
	g('twlogo').style.width = "15px";
	g('esp').style.width = "15px";
	g('cat').style.width = "15px";
	g('eng').style.width = "15px";  
  }else if(g('righth').offsetWidth < 145){
    //empiezan a no caber iconos de banderas y redes
	g('iglogo').style.width = "20px";
	g('twlogo').style.width = "20px";
	g('esp').style.width = "20px";
	g('cat').style.width = "20px";
	g('eng').style.width = "20px";
  } 
  
  //obtenemos el ancho de los botones de navegación
  let bheight = g('home').offsetHeight;
  
  //el ancho de los iconos (si hay) serán 10px menos que el ancho
  let mpics = document.getElementsByClassName('menuicon');
  let mi = 0;
  
  for(;mi < mpics.length;mi++)
    mpics[mi].style.height = '' + (bheight - 10) + 'px';
}

function getString(k){
  let limit = 148;

  if(g('home').offsetWidth >= limit)
    return getTextString(k);

  return getIconString(k);
}

function getTextString(k){return str[k * 3 + idioma];}
function getIconString(k){return imgstr[k];}
