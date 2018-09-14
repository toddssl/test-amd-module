define([
    'utils'
], function (utils) {
    console.log("core module create");
    var myModule = {
        init:function(){
            console.log("call core module function");
            utils.init();
        }
    }
    return myModule;
});

