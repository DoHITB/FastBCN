	  	var idioma = 0; //0: CAS | 1: CAT | 2: ENG
		var curSec = "";
		
		window.onresize = reload;
		
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
		  //detenemos animaciones
		  try{
            clearTimeout(intervalLeft);
          }catch(e){}
        
          try{
            clearTimeout(intervalRight);
          }catch(e){}
		  
		  try{
            clearTimeout(intervalDown);
          }catch(e){}
          
          try{
            clearTimeout(intervalUp);
          }catch(e){}
			
		  //actualizamos cabecera
		  setString(getString("HOME"), "home");
		  setString(getString("ABOUT"), "about");
		  setString(getString("TARIFAS"), "tarifas");
		  setString(getString("GALERIA"), "galeria");
		  setString(getString("REDES"), "redes");
		  setString(getString("CONTACTO"), "contacto");
		  
		  //recargamos la sección
		  if(isOnCurSec("home")){
		    curSec = "";
			home();
		  }else if(isOnCurSec("about")){
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
		}
		
	  	function getString(k){
		  let limit = 90;
		  
		  if(g('home').offsetWidth >= limit)
		    return getTextString(k);
		  
		  return getIconString(k);
		}
		
		function getTextString(k){
	      if(k === "HOME"){
	        if(idioma == 0){
		      return "Inicio";
		    }else if(idioma == 1){
		      return "Inici";
		    }else if(idioma == 2){
		      return "Home";
		    }
	      }else if(k === "ABOUT"){
	  	    if(idioma == 0){
		      return "Sobre nosotros";
		    }else if(idioma == 1){
		      return "Sobre nosaltres";
		    }else if(idioma == 2){
		      return "About us";
		    }
	      }else if(k === "TARIFAS"){
	  	     if(idioma == 0){
		      return "Tarifas";
		    }else if(idioma == 1){
		      return "Tarifes";
		    }else if(idioma == 2){
		      return "Rating";
		    }
	      }else if(k === "GALERIA"){
	  	    if(idioma == 0){
		      return "Galería";
		    }else if(idioma == 1){
		      return "Galeria";
		    }else if(idioma == 2){
		      return "Gallery";
		    }
	      }else if(k === "REDES"){
	  	    if(idioma == 0){
		      return "Redes";
		    }else if(idioma == 1){
		      return "Xarxes";
		    }else if(idioma == 2){
		      return "Network";
		    }
	      }else if(k === "CONTACTO"){
	         if(idioma == 0){
		      return "Contacto";
		    }else if(idioma == 1){
		      return "Contacte";
		    }else if(idioma == 2){
		      return "Contact";
		    }
	      }
		
	      return "";
	    }
		
		function getIconString(k){
		  if(k === "HOME"){
            return "<img src='./img/icons/home.png' class='menuicon' />";
	      }else if(k === "ABOUT"){
            return "<img src='./img/icons/about.png' class='menuicon' />";
	      }else if(k === "TARIFAS"){
            return "<img src='./img/icons/tarifas.png' class='menuicon' />";
	      }else if(k === "GALERIA"){
            return "<img src='./img/icons/galeria.png' class='menuicon' />";
	      }else if(k === "REDES"){
            return "<img src='./img/icons/redes.png' class='menuicon' />";
	      }else if(k === "CONTACTO"){
            return "<img src='./img/icons/contacto.png' class='menuicon' />";
	      }
		  
		  return "";
		}
