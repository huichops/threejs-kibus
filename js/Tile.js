function Tile(dom, scene) {
  this.dom = dom;
  this.scene = scene;
  Tile.side = 0.2;
  this.geometry = new THREE.CubeGeometry(Tile.side,Tile.side,Tile.side,1,1,1);
  //this.material = new THREE.MeshNormalMaterial();
  //this.material = new THREE.MeshBasicMaterial({color:0x00EE00});

}

Tile.prototype.init = function(){

  var color = '#'+Math.floor(Math.random()*16777215).toString(16);

  this.material = new THREE.MeshBasicMaterial({color: 0x222222});
  this.wireframe = new THREE.MeshBasicMaterial({color:0xEEEEEE,
      wireframe: true,
      wireframeLinewidth: 20 });

  this.mesh = new THREE.Mesh(this.geometry,this.material);
  this.mesh2 = new THREE.Mesh(this.geometry,this.wireframe);

  this.dom.addEventListener(this.mesh, 'click', this.toggleObstacle, false);
  this.mesh.position.x = 1;
  this.mesh.position.y = -5;
  this.mesh.position.z = 0;
  this.mesh2.position.x = 1;
  this.mesh2.position.y = -5;
  this.mesh2.position.z = 0;
  scene.add(this.mesh2);
  scene.add(this.mesh);
};

Tile.prototype.toggleObstacle = function(object) {
  var scene = object.target.parent;
  console.log(object.target.tile);

  console.log(object.target.parent);

  if (scene.state == scene.states.obs) {
    if (object.target.tile.val == 1) {
      object.target.material.color.setHex(0x222222); 
      object.target.tile.val = 0;
    } else {
      object.target.material.color.setHex(0xCC1111); 
      object.target.tile.val = 1;
    }
  }
  else if (scene.state == scene.states.kibus) {
    object.target.material.color.setHex(0x1111CC); 
    object.target.tile.val = 0;
    console.log(object.target.tile.grid);
  }
};

