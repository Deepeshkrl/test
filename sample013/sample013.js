'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');
    
    var divDisp1 = $('#display1');
    var divDisp2 = $('#display2');

    divBtn3.on('click', function () {
        // alert(divBtn1.text());
        
        var val1 = divBtn1.text();
        // alert(val1);
        
        var val2 = divBtn2.text();
        // alert(val2);
        
        // alert(val1 + val2);
        // alert(Number(val1) + Number(val2));
        // alert(10 + 99);
        
        divDisp1.text(Number(val1) + Number(val2));
        divDisp2.text(val1 + val2);
        
    });    
    
    
    
    
});
