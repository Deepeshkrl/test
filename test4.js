(function(){
    'use strict';
    //.........................
    //EVENT:index.show
    //.......................
    kintone.events.on('app.record.index.show',function(event){
        var records = event.records;
       var bgcolor='#fff8dc';
       var elcolor = kintone.app.getFieldElements('color');
       var elcount = kintone.app.getFieldElements('count');
       
       for (var i=0;i< elcolor.length;i++){
            var record = records[i];
            elcolor[i].style.backgroundcolor = bgcolor;
            
            switch (record.color.value){
                case'red':
                    elcolor[i].style.color ='#ff0000';
                    break;
                    case 'blue':
                        elcolor[i].style.color ='#0000ff';
                        break;
                        default:
                        elcolor[i].style.color ='#ffff00';
                        break;
            }
            if (Number(record.count.value) >=20){
                elcount[i].style.color = '#ff0000';
                elcount[i].style.fontweight ='bold';
                           }
               }
               return event;
              });
    //.........................
     //EVENT:index.show
    //.......................
    kintone.events.on('app.record.detail.show',function(event){
        var records = event.record;
        var elcolor=kintone.app.record.getFieldElement('color');
        if (record.color.value==="red"){
            elcolor.style.color='#ff0000';
            elcolor.style.fontweight='bold';
        }
           return event;
    });
  
        
    })();
    