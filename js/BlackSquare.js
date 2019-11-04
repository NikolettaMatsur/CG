class BlackSquare extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CubeGeometry(6, 6, 0.011);

    var material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: false} );
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y , z);
  
    this.add(mesh);

    scene.add(this);

    this.position.x = x;
    this.position.y = y;
    this.position.z = z;

  }
}
