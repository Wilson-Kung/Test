gdjs.Starts_32GamesCode = {};
gdjs.Starts_32GamesCode.localVariables = [];
gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1= [];
gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects2= [];
gdjs.Starts_32GamesCode.GDNewSpriteObjects1= [];
gdjs.Starts_32GamesCode.GDNewSpriteObjects2= [];
gdjs.Starts_32GamesCode.GDNewTextInputObjects1= [];
gdjs.Starts_32GamesCode.GDNewTextInputObjects2= [];


gdjs.Starts_32GamesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1[k] = gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Games1", false);
}}

}


};

gdjs.Starts_32GamesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.Starts_32GamesCode.GDNewSpriteObjects1.length = 0;
gdjs.Starts_32GamesCode.GDNewSpriteObjects2.length = 0;
gdjs.Starts_32GamesCode.GDNewTextInputObjects1.length = 0;
gdjs.Starts_32GamesCode.GDNewTextInputObjects2.length = 0;

gdjs.Starts_32GamesCode.eventsList0(runtimeScene);
gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.Starts_32GamesCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.Starts_32GamesCode.GDNewSpriteObjects1.length = 0;
gdjs.Starts_32GamesCode.GDNewSpriteObjects2.length = 0;
gdjs.Starts_32GamesCode.GDNewTextInputObjects1.length = 0;
gdjs.Starts_32GamesCode.GDNewTextInputObjects2.length = 0;


return;

}

gdjs['Starts_32GamesCode'] = gdjs.Starts_32GamesCode;
