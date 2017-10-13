(function(){
    'use strict';
    kintone.events.on('app.record.detail.show',function(event){
        alert('deep');
        
    });//end kintone.events.on[app.record.index.show]
})();