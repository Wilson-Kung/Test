gdjs.Games1Code = {};
gdjs.Games1Code.localVariables = [];
gdjs.Games1Code.GDBGObjects1= [];
gdjs.Games1Code.GDBGObjects2= [];
gdjs.Games1Code.GDFarmerObjects1= [];
gdjs.Games1Code.GDFarmerObjects2= [];
gdjs.Games1Code.GDFarmer2Objects1= [];
gdjs.Games1Code.GDFarmer2Objects2= [];
gdjs.Games1Code.GDWorkerObjects1= [];
gdjs.Games1Code.GDWorkerObjects2= [];
gdjs.Games1Code.GDFarmer3Objects1= [];
gdjs.Games1Code.GDFarmer3Objects2= [];
gdjs.Games1Code.GDFarmer4Objects1= [];
gdjs.Games1Code.GDFarmer4Objects2= [];
gdjs.Games1Code.GDFarmer5Objects1= [];
gdjs.Games1Code.GDFarmer5Objects2= [];


gdjs.Games1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Games1Code.GDFarmerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worker"), gdjs.Games1Code.GDWorkerObjects1);
{for(var i = 0, len = gdjs.Games1Code.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Games1Code.GDFarmerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Games1Code.GDWorkerObjects1.length ;i < len;++i) {
    gdjs.Games1Code.GDWorkerObjects1[i].putAround(830, 150, 0, 0);
}
}}

}


};

gdjs.Games1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Games1Code.GDBGObjects1.length = 0;
gdjs.Games1Code.GDBGObjects2.length = 0;
gdjs.Games1Code.GDFarmerObjects1.length = 0;
gdjs.Games1Code.GDFarmerObjects2.length = 0;
gdjs.Games1Code.GDFarmer2Objects1.length = 0;
gdjs.Games1Code.GDFarmer2Objects2.length = 0;
gdjs.Games1Code.GDWorkerObjects1.length = 0;
gdjs.Games1Code.GDWorkerObjects2.length = 0;
gdjs.Games1Code.GDFarmer3Objects1.length = 0;
gdjs.Games1Code.GDFarmer3Objects2.length = 0;
gdjs.Games1Code.GDFarmer4Objects1.length = 0;
gdjs.Games1Code.GDFarmer4Objects2.length = 0;
gdjs.Games1Code.GDFarmer5Objects1.length = 0;
gdjs.Games1Code.GDFarmer5Objects2.length = 0;

gdjs.Games1Code.eventsList0(runtimeScene);
gdjs.Games1Code.GDBGObjects1.length = 0;
gdjs.Games1Code.GDBGObjects2.length = 0;
gdjs.Games1Code.GDFarmerObjects1.length = 0;
gdjs.Games1Code.GDFarmerObjects2.length = 0;
gdjs.Games1Code.GDFarmer2Objects1.length = 0;
gdjs.Games1Code.GDFarmer2Objects2.length = 0;
gdjs.Games1Code.GDWorkerObjects1.length = 0;
gdjs.Games1Code.GDWorkerObjects2.length = 0;
gdjs.Games1Code.GDFarmer3Objects1.length = 0;
gdjs.Games1Code.GDFarmer3Objects2.length = 0;
gdjs.Games1Code.GDFarmer4Objects1.length = 0;
gdjs.Games1Code.GDFarmer4Objects2.length = 0;
gdjs.Games1Code.GDFarmer5Objects1.length = 0;
gdjs.Games1Code.GDFarmer5Objects2.length = 0;


return;

}

gdjs['Games1Code'] = gdjs.Games1Code;
