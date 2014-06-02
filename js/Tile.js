function Tile(scene) {
  this.scene = scene;
  Tile.side = 0.2;
  this.geometry = new THREE.CubeGeometry(Tile.side,Tile.side,Tile.side,1,1,1);
  //this.material = new THREE.MeshNormalMaterial();
  //this.material = new THREE.MeshBasicMaterial({color:0x00EE00});

}

Tile.prototype.init = function(){

  var color = '#'+Math.floor(Math.random()*16777215).toString(16);

  this.material = new THREE.MeshBasicMaterial({color: 0x222222});
  this.wireframe = new THREE.MeshBasicMaterial({color:0x6666FF,
      wireframe: true,
      wireframeLinewidth: 20 });

  this.mesh = new THREE.Mesh(this.geometry,this.material);
  this.mesh2 = new THREE.Mesh(this.geometry,this.wireframe);

  this.mesh.position.x = 1;
  this.mesh.position.y = -5;
  this.mesh.position.z = 0;
  this.mesh2.position.x = 1;
  this.mesh2.position.y = -5;
  this.mesh2.position.z = 0;
  scene.add(this.mesh2);
  scene.add(this.mesh);
}

