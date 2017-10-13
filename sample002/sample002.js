'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('CHANGE COLOR!');

    divBase.append(divButton);

    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
    divButton.text('CHANGE COLOR!');
    divButton.css({"background-color": "yellow"});
        //...クりシクされるたびに、何でも
        
        cliCkcount=clickcount+1;
        divButton.text('kume sennsei*'+cliCkcount);
        if (cliCkcount==1){
            divButton.css({"background-color":"#0000ff"});
        }else if (cliCkcount==2){
            divButton.css({"background-color":"#00ff00"});
        }
        else  {
            divButton.css({"background-color":"#ff0000"});
            cliCkcount=0;
        }
        
        
    });
});
