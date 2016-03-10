
global = {
  "renderer": null,
  "scene": null,
  "camera": null,
  "componentManager": null
};

function main(){

  global.scene = new THREE.Scene();
  global.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  global.camera.position.z = 35;
  global.camera.position.x = 9;

  global.renderer = new THREE.WebGLRenderer();
  global.renderer.setSize(window.innerWidth-3, window.innerHeight-3, true);
  document.body.appendChild( global.renderer.domElement );

  global.componentManager = new ComponentManager(global.scene);

  addContentTest();
  render();
}

window.onload = main;

function addContentTest(){
  global.componentManager.addComponent("bla");

}

function applyChanges(){
}

function render() {
  requestAnimationFrame( render );
  applyChanges();
  global.renderer.render( global.scene, global.camera );
}