    var sections = ['home', 'about', 'tarifas', 'galeria', 'redes', 'contacto'];
    var step = 0;
    var maxStep = 50;
    var tranLength = 200;
    var intervalDown;
    var intervalUp;
	var stp = 0;
    var allText = "";
    
    /* Main - HEAD */
    var mhMaxPic = 5;
    var mhCurrPic = 0;
    var mhstep = 0;
    var fTime = false;
    var intervalLeft;
    var intervalRight;
    
    /*bigHeader();
    smallHeader();*/
    
    home();
    	
    function home(){
      if(isOnCurSec("home"))
        return;
      
      curSec = "home";
      maximize();
      clear();
      fill("home");
      
      //inicializamos
      mhMaxPic = 5;
      mhCurrPic = 0;
      mhstep = 0;
      var fTime = false;
      
      setTimeout("mhload()", 1005);
    }
    
    function about(){
      if(isOnCurSec("about"))
        return;
      
      curSec = "about";
      minimize();
      clear();
      fill("about");
    }
    
    function tarifas(){
      if(isOnCurSec("tarifas"))
        return;
      
      curSec = "tarifas";
      minimize();
      clear();
      fill("tarifas");
    }
    
    function galeria(){
      if(isOnCurSec("galeria"))
        return;
      
      curSec = "galeria";
      minimize();
      clear();
      add("Estas en GALERIA");
    }
    
    function redes(){
      if(isOnCurSec("redes"))
        return;
      
      curSec = "redes";
      minimize();
      clear();
      fill("redes");
    }
    
    function contacto(){
      if(isOnCurSec("contacto"))
        return;
      
      curSec = "contacto";
      minimize();
      clear();
      add("Estas en CONTACTO");
    }
    
    function minimize(){
      if(step >= maxStep){
        //step == 50 --> animación completada
        return;
      }else{
        if(step !== 0){
          //hay alguna animación en marcha. Paramos ambas
          try{
            clearTimeout(intervalDown);
          }catch(e){}
          
          try{
            clearTimeout(intervalUp);
          }catch(e){}
        }
      
        intervalDown = setInterval("transition(false)", tranLength / maxStep);
      }
    }
    
    function maximize(){
      if(step == 0){
        //step == 0 --> animación completada
        return;
      }else{
        if(step !== 0){
          //hay alguna animación en marcha. Paramos ambas
          try{
            clearTimeout(intervalDown);
          }catch(e){}
          
          try{
            clearTimeout(intervalUp);
          }catch(e){}
        }
    
        intervalUp = setInterval("transition(true)", tranLength / maxStep);
      }
    }
    
    function bigHeader(){
      /*
       * mhead.height: 100%;
       * strapd.top: 87%;
       * tabs.height: 0%;
       * tabs.top: 90%;
       * tab.height: 0;
       * tab.top: -4px;
       * tab.height: 21px;
       */
      g('mhead').style.height = '100%';
      g('strapd').style.top = '87%';
      g('tabs').style.height = '0%';
      g('tabs').style.top = '90%';
      
      let bhi = 0;
      
      for(;bhi < sections.length;bhi++){
        g(sections[bhi]).style.top = '-4px';
        g(sections[bhi]).style.height = '21px';
      }
    }
    
    function smallHeader(){
      /*
       * header.top: -25px;
       * strapd.width: 0%;
       * tabs.height: 13%;
       * tabs.top: 87%;
       * tab.height: 100%;
       * tab.top: 0px;
       */
      g('header').style.top = '-25px';
      g('strapd').style.width = '0%';
      g('tabs').style.height = '13%';
      g('tabs').style.top = '87%';
       
      let shi = 0;
       
      for(;shi < sections.length;shi++)
        g(sections[shi]).style.top = '0px';
    }
    
    function transition(ind){    
      //header.top --> -step/2 pixels
      let hTop = Math.floor(step / 2) * -1;
      
      //strapd.width --> 100 - (100/maxStep) * step %
      let sWidth = Math.floor(100 - (Math.floor(100 / maxStep) * step));
      
      //tabs.height --> 13 / maxStep * step %
      let tHeight = Math.floor((Math.floor(13 / maxStep)) * step);
      
      //tabs.top
      let tTop = 90 - Math.floor((Math.floor(3 / maxStep) * step));
      
      //tab.top
      let ttTop = -4 + Math.floor((Math.floor(4 / maxStep) * step));

      //bbody.top
      let bbTop = 30 - Math.floor(Math.floor((4 / maxStep) * step));
      
      //bbody.height
      let bbHei = 65 + Math.floor(Math.floor((4 / maxStep) * step));

      let ti = 0;
      
      g('header').style.top = '' + hTop + 'px';
      g('strapd').style.width = '' + sWidth + '%';
      g('tabs').style.height = '' + tHeight + '%';
      g('tabs').style.top = '' + tTop + '%';
      g('bbody').style.top = '' + bbTop + '%';
      g('bbody').style.height = '' + bbHei + '%';
      
      for(;ti < sections.length;ti++){
        g(sections[ti]).style.top = '' + ttTop + 'px';
      }
        
      if(ind === false){
        //vamos hacia la cabecera pequeña
        ++step;
        
        if(step > maxStep){
          clearTimeout(intervalDown);
        }
      }else{        
        if(step == 0){
          clearTimeout(intervalUp);
        }
        
        //vamos hacia la cabecera grande
        --step;
      }
    }
    
    function clear(){g("bbody").innerHTML = '';}
    function add(t){g("bbody").innerHTML += t;}
    function fill(k){
	  readTextFile(k + "_" + idioma + ".dat");
	  setTimeout("parse(allText)", 1000);
	}
	
    function parse(t){add(t);}
	
    function readTextFile(file){
      var rawFile = new XMLHttpRequest();
      allText = "";
	  var n = 0;
      
	  stp = 0;
	  
      rawFile.open("GET", file, true);
      rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
          if(rawFile.status === 200 || rawFile.status == 0){
            allText = rawFile.responseText;
			stp = 1;
          }
        }
      }
	
	  rawFile.send(null);
	  
	  return null;
    }
    
    /*
     * MAIN - HOME
     */
    function addPic(i, side){
      if(side === "left" || side === "center" || side === "right"){
        g("mh" + side).innerHTML += "<img src='./img/fastbcn-home-" + i + ".webp' id='hmpic" + i + "'/>";
      }else{
        return;
      }
    }
  
    function mhload(){
	  var mhli = 1;
      
      //la primera va al center
      addPic(0, "center");
      
      //el resto, a la derecha
      for(mhli = 1;mhli < mhMaxPic;mhli++){
        addPic(mhli, "right");
      }
      
      goLeft();
    }
    
    function goLeft(){
      if(mhstep !== 0){
        //hay alguna animación en marcha. Paramos ambas
        try{
          clearTimeout(intervalLeft);
        }catch(e){}
        
        try{
          clearTimeout(intervalRight);
        }catch(e){}
      }
      
      
      mhstep = 0;
      intervalLeft = setInterval("mhtransition(false)", tranLength / maxStep);
    }
    
    function goRight(){
      if(mhstep !== 0){
        //hay alguna animación en marcha. Paramos ambas
        try{
          clearTimeout(intervalLeft);
        }catch(e){}
        
        try{
          clearTimeout(intervalRight);
        }catch(e){}
      }
    
      mhstep = maxStep;
      intervalRight = setInterval("mhtransition(true)", tranLength / maxStep);
    }
    
    function mhtransition(ind){
      let cLeftO = 116;
      let cRightO = 105;
      
      if(ind){
        cLeftO = 115;
        cRightO = 105;
      }
      
      let ink = -1;
      let offl = 0;
      let offr = 0;
      
      //actual
      let v1 = mhCurrPic % mhMaxPic;
      
      //proximo
      let v2 = (mhCurrPic + 1) % mhMaxPic;
            
      let cLeft = Math.floor(((cLeftO / maxStep) * mhstep));
      let cRight = Math.floor(((cRightO / maxStep) * mhstep));
      
      cLeft *= ink;
      cRight *= ink;
      
      
      if(v1 > 0){
        offl = cRightO * ink;
      }
      
      if(v2 == 0){
        offr = (cRightO + 1) * ink * ink;
      }
      
      if(v1 == 0){
        if(ind){
          ++cLeft;
        }
      }
        
      g("hmpic" + v1).style.left = '' + (cLeft + offl) + '%';
      g("hmpic" + v2).style.left = '' + (cRight + offr) + '%';
    
      if(ind === false){
        //vamos hacia la izquierda
        ++mhstep;
        
        if(mhstep > maxStep){
          clearTimeout(intervalLeft);
          
          //reiniciamos para poder volver a empezar
          mhstep = 0;
          mhCurrPic = (mhCurrPic + 1) % mhMaxPic;
        }
      }else{        
        if(mhstep == 0){
          clearTimeout(intervalRight);
          
          //reiniciamos para poder volver a empezar
          mhStep = 1;
          
          //hemos llegado a la última foto
          if(mhCurrPic == 0){
            //pasamos a la ultima, y al restar una encajará de nuevo
            mhCurrPic = mhMaxPic;
          }
          
          mhCurrPic = (mhCurrPic - 1) % mhMaxPic;
        }
        
        //vamos hacia la derecha
        --mhstep;
      }
    }
	
	/*
	 * MAIN - ABOUT
	 */
	 function about2contact(){
		contacto();
	 }
