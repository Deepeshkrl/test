(function(){
    'use strict';
    //.........................
    //EVENT:index.show
    //.......................
    kintone.events.on('app.record.index.show',function(event){
        var records = event.records;
        for (var i=0 ; i<records.length;i++){
            var record = records [i];
            console.log('=='+i+'==');
            console.log(record.name.value);
            console.log(record.color.value);
            console.log(record.count.value);
            console.log(record.memo.value);
        }
        return event;
    });//end kintone.events.on [app.record.index.show]
    kintone.events.on('app.record.index.show',function(event){
        var records = event.records;
            console.log(record.name.value);
            console.log(record.color.value);
            console.log(record.count.value);
            console.log(record.memo.value);
    return event;
    });//end kintone.events.on[app.record.detail.show]
    //.............................
    // Event:create.submit
    //..........................
    kintone.events.on('app.record.create.submit',function(event){
        var record=event.record;
        record.name.value='car';
        record.color.value='blue';
        record.count.value=12345;
        record.memo.value='default memo';
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

})();