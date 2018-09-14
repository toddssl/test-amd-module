define('utils',[], function () {
    console.log("utils module create");
    var myModule = {
        init:function(){
            console.log("call util module function");
        }
    }
    return myModule;
});
define('core',[
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


