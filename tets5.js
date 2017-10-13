(function(){
    'use strict';
    //.........................
    //EVENT:index.show
    //.......................
    kintone.events.on('app.record.index.show',function(event){
        var records = event.records;
       // ....................
       // CREATE DOM 
       //.........................
       var $indexHeader =$(kintone.app.getHeaderMenuSpaceElement());
       var$btnsample1 = $("<button>",{id:"btn_sample1"}).appendb$indexHeader>append($btnsample1);
      $indexHeader.append($btnsample1);
      var $btArea =$('#btnArea');
      var $btnsample2 = $("<button>",{id:"btn_sample2"}).append("")
      
       
       
       
       
       
       
       
       
       
       
       
       
       
       
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
    