'use strict';

$(function(){
 // DOM
    var $divCalcPos = $("#calc");
    
    var $divSample1 = $("<div>", { "id": "sample1", "class": "sample1"});
    $divSample1.text('7');
     var $divSample2 = $("<div>", { "id": "sample2", "class": "sample2"});
    $divSample2.text('8');
    var $divSample3 = $("<div>", { "id": "sample3", "class": "sample3"});
    $divSample3.text('9');
    var $divSample4 = $("<div>", { "id": "sample4", "class": "sample4"});
    $divSample4.text('.');
    var $divSample5 = $("<div>", { "id": "sample5", "class": "sample5"});
    $divSample5.text('+/-');
    var $divSample6 = $("<div>", { "id": "sample6", "class": "sample6"});
    $divSample6.text('BS');
    var $divSample7 = $("<div>", { "id": "sample7", "class": "sample7"});
    $divSample7.text('CE');
    var $divSample8 = $("<div>", { "id": "sample8", "class": "sample8"});
    $divSample8.text('AC');
    var $divSample9 = $("<div>", { "id": "sample9", "class": "sample9"});
    $divSample9.text('4');
    var $divSample10 = $("<div>", { "id": "sample10", "class": "sample10"});
    $divSample10.text('5');
    var $divSample11 = $("<div>", { "id": "sample11", "class": "sample11"});
    $divSample11.text('6');
    var $divSample12 = $("<div>", { "id": "sample12", "class": "sample12"});
    $divSample12.text('0');
    var $divSample13 = $("<div>", { "id": "sample13", "class": "sample13"});
    $divSample13.text('+');
    var $divSample14 = $("<div>", { "id": "sample14", "class": "sample14"});
    $divSample14.text('-');
    var $divSample15 = $("<div>", { "id": "sample15", "class": "sample15"});
    $divSample15.text('*');
    var $divSample16 = $("<div>", { "id": "sample16", "class": "sample16"});
    $divSample16.text('/');
    var $divSample17 = $("<div>", { "id": "sample17", "class": "sample17"});
    $divSample17.text('1');
    var $divSample18 = $("<div>", { "id": "sample18", "class": "sample18"});
    $divSample18.text('2');
    var $divSample19 = $("<div>", { "id": "sample19", "class": "sample19"});
    $divSample19.text('3');
    var $divSample20 = $("<div>", { "id": "sample20", "class": "sample20"});
    $divSample20.text('000');
    var $divSample21 = $("<div>", { "id": "sample21", "class": "sample21"});
    $divSample21.text('=');
    var $divDisplay1 = $("<div>", { "id": "display1", "class": "display1"});
    var $group = $("<div>", { "id": "group", "class": "group"});
    
    $divDisplay1.text('display-1');
    $divCalcPos.append($divSample1);
    $divCalcPos.append($divSample2);
    $divCalcPos.append($divSample3);
    $divCalcPos.append($divSample4);
    $divCalcPos.append($divSample5);
    $divCalcPos.append($divSample6);
    $divCalcPos.append($divSample7);
    $divCalcPos.append($divSample8);
    $divCalcPos.append($divSample9);
    $divCalcPos.append($divSample10);
    $divCalcPos.append($divSample11);
    $divCalcPos.append($divSample12);
    $divCalcPos.append($divSample13);
    $divCalcPos.append($divSample14);
    $divCalcPos.append($divSample15);
    $divCalcPos.append($divSample16);
    $divCalcPos.append($divSample17);
    $divCalcPos.append($divSample18);
    $divCalcPos.append($divSample19);
    $divCalcPos.append($divSample20);
    $divCalcPos.append($divSample21);
    $divCalcPos.append($divDisplay1);
$divCalcPos.append($divDisplay2);
$divCalcPos.append($divDisplay3);
$divCalcPos.append($divDisplay4);
$divCalcPos.append($divDisplay5);
$divCalcPos.append($divDisplay6);
$divCalcPos.append($divDisplay7);
$divCalcPos.append($divDisplay8);
$divCalcPos.append($divDisplay9);
$divCalcPos.append($divDisplay10);
$divCalcPos.append($divDisplay11);
$divCalcPos.append($divDisplay12);
$divCalcPos.append($divDisplay13);
$divCalcPos.append($divDisplay14);
$divCalcPos.append($divDisplay15);
$divCalcPos.append($divDisplay16);
$divCalcPos.append($divDisplay17);
$divCalcPos.append($divDisplay18);
$divCalcPos.append($divDisplay19);
$divCalcPos.append($divDisplay20);
$divCalcPos.append($divDisplay21);
    // EVENT
    $divSample1.on('click', function(){
        $divDisplay1.text("7");
        $divDisplay1.text(msg);

    });
        $divSample2.on('click', function(){
        $divDisplay2.text("8");
        });
        $divSample3.on('click', function(){
        $divDisplay3.text("9");
        });
        $divSample4.on('click', function(){
        $divDisplay4.text(".");
        });
        $divSample5.on('click', function(){
        $divDisplay5.text("+/-");
        });
        $divSample6.on('click', function(){
        $divDisplay6.text("BS");
        });
        $divSample7.on('click', function(){
        $divDisplay7.text("CE");
        });
    $divSample8.on('click', function(){
        $divDisplay8.text("AC");
    });
        $divSample9.on('click', function(){
        $divDisplay9.text("4");
        });
        $divSample10.on('click', function(){
        $divDisplay10.text("5");
        });
        $divSample11.on('click', function(){
        $divDisplay11.text("6");
        });
        $divSample12.on('click', function(){
        $divDisplay12.text("0");
        });
        $divSample13.on('click', function(){
        $divDisplay13.text("+");
        });
        $divSample14.on('click', function(){
        $divDisplay14.text("-");
        });
        $divSample15.on('click', function(){
        $divDisplay15.text("*");
        });
        $divSample16.on('click', function(){
        $divDisplay16.text("%");
        });
        $divSample17.on('click', function(){
        $divDisplay17.text("1");
        });
        $divSample18.on('click', function(){
        $divDisplay18.text("2");
        });
        $divSample19.on('click', function(){
        $divDisplay19.text("3");
});
        $divSample20.on('click', function(){
        $divDisplay20.text("000");
        });
        $divSample21.on('click', function(){
        $divDisplay21.text("0");
        
    });

    $divSample2.on('click', function(){
        var msg = '';
        
        msg += $divSample1.text();
        msg += '*display*';
        // msg += 'deep';
        // msg += 'tarou';

        
});
});



