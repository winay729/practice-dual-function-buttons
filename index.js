function openClose(){
    var rulesbox=document.getElementById("rulesbox");
    var btn=document.getElementById("openCloseBtn");
    if(rulesbox.style.display=="none"){
        rulesbox.style.display="block";
        btn.innerHTML="Close";
    }else{
        rulesbox.style.display="none";
        btn.innerHTML="Open";
    }
}