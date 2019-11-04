class WhiteDot extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CylinderGeometry(1, 0.5, 0.1, 20);

    var material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false} );
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y , z);
    geometry.applyMatrix( new THREE.Matrix4().makeRotationX(THREE.Math.degToRad(90)));

    this.add(mesh);

    scene.add(this);

    this.position.x = x;
    this.position.y = y;
    this.position.z = z;

  }
}
