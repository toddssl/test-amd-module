define([], function () {
    console.log("utils module create");
    var myModule = {
        init:function(){
            console.log("call util module function");
        }
    }
    return myModule;
});