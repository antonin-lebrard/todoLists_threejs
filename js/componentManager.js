
var centerXLeft = 0;
var centerXRight = 16;
var centerYUp = 15;
var centerYDown = -15;


var ComponentManager = function(scene){
  this.listComponents = [];
  this.visibleCompoIndBounds = [];
  this.currentInd = 0;
  this.maximumVisibleCompo = 5;
  this.scene = scene;
};

ComponentManager.prototype.addComponent = function(type){
  var coefEnd = (this.listComponents.size - this.currentInd) + 1;
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3( 0, 15, 0),
    new THREE.Vector3( 16, 15, 0 ),
    new THREE.Vector3( 0, -15, 0 ),
    new THREE.Vector3( 16, -15, 0 )
  );
  geometry.faces.push(
    new THREE.Face3( 0, 1, 2 ),
    new THREE.Face3( 3, 2, 1 )
  );
  this.pushComponent(new Component(type, geometry));
};

ComponentManager.prototype.pushComponent = function(component){
  var insertId = this.listComponents.push(component);
  component.addToScene();
  if (this.visibleCompoIndBounds.size < 1){
    this.visibleCompoIndBounds.push(insertId);
    this.currentInd = 0;
  } else if (this.visibleCompoIndBounds[1] - this.visibleCompoIndBounds[0] < this.maximumVisibleCompo){
    this.visibleCompoIndBounds[1] = insertId;
  }
};

ComponentManager.prototype.removeComponent = function(options){
  if (!options || !options.id || !options.component){
    if (this.visibleCompoIndBounds.size > 1) {
      if (this.listComponents.size - 1 >= this.visibleCompoIndBounds[0]) {
        if (this.visibleCompoIndBounds[0] > 0) this.visibleCompoIndBounds[0]--;
        this.visibleCompoIndBounds[1]--;
        this.listComponents.pop().removeFromScene();
      } else {
        this.listComponents.pop().removeFromScene();
      }
    } else {
      this.visibleCompoIndBounds.pop();
      this.listComponents.pop().removeFromScene();
    }
  } else {
    console.log("ComponentManager : removeComponent Not Implemented")
  }
};

ComponentManager.prototype._updateIntern = function(){
  console.log("ComponentManager : _updateIntern Not Implemented")

};
