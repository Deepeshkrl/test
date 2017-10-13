'use strict';

$(function(){
    var divBase = $("#base");
    var arryButton = []; // button 貯める
    var buttonNumber = 1;
    
    //----creat button
    for (var buttonNumber = 0; buttonNumber < 21; buttonNumber ++) {
      var divButton = $("<div>", { "id": "button" + buttonNumber, "class": "button"});
      divButton.text("button" + buttonNumber);
        //----- set event to button
      divButton.on('click !' ,function () {
        alert("click !" + $(this).text());
      });
      //----- store one button to arry
      arryButton[buttonNumber] = divButton;
    }
    console.info(arryButton);
   // for (var buttonNumber = 0; buttonNumber < 21; buttonNumber ++) {
    
  arryButton.forEach(function(button){
     divBase.append(button);
  });
  
      //---- apend buttons to the base-html
     //divBase.append(arryButton[buttonNumber]);
    
  
});
