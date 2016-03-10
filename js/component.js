
/**
 * Object Representing a Component
 *  variables:
 *    type : type name
 *  methods:
 *    addToScene : add to scene
 *    removeFromScene : remove from scene;
 */

var Component = function(type, geometry){
  this.type = type;
  this._isInScene = false;

  var material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
  this._mesh = new THREE.Mesh( geometry, material );
};

Component.prototype.addToScene = function(){
  console.log("Component : addToScene");
  if (!this._isInScene) {
    global.scene.add(this._mesh);
    this._isInScene = true;
  }
};
Component.prototype.removeFromScene = function(){
  console.log("Component : removeFromScene");
  if (this._isInScene) {
    global.scene.remove(this._mesh);
    this._isInScene = false;
  }
};