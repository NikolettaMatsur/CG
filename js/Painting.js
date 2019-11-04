class Painting extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CubeGeometry(36, 36, 0);

    var material = new THREE.MeshBasicMaterial( { color: 0xf0f0f0, wireframe: false} );
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y , z);

    new BlackSquare(x-7.6,y+7.6,z);
    new BlackSquare(x-7.6,y+7.6/2,z);
    new BlackSquare(x-7.6,y,z);
    new BlackSquare(x-7.6,y-7.6/2,z);
    new BlackSquare(x-7.6,y-7.6,z);

    new BlackSquare(x-7.6/2,y+7.6,z);
    new BlackSquare(x-7.6/2,y+7.6/2,z);
    new BlackSquare(x -7.6/2,y,z);
    new BlackSquare(x-7.6/2,y-7.6/2,z);
    new BlackSquare(x-7.6/2,y-7.6,z);

    new BlackSquare(x,y+7.6,z);
    new BlackSquare(x,y+7.6/2,z);
    new BlackSquare(x,y,z);
    new BlackSquare(x,y-7.6/2,z);
    new BlackSquare(x,y-7.6,z);

    new BlackSquare(x+7.6/2,y+7.6,z);
    new BlackSquare(x+7.6/2,y+7.6/2,z);
    new BlackSquare(x+7.6/2,y,z);
    new BlackSquare(x+7.6/2,y-7.6/2,z);
    new BlackSquare(x+7.6/2,y-7.6,z);

    new BlackSquare(x+7.6,y+7.6,z);
    new BlackSquare(x+7.6,y+7.6/2,z);
    new BlackSquare(x+7.6,y,z);
    new BlackSquare(x+7.6,y-7.6/2,z);
    new BlackSquare(x+7.6,y-7.6,z);

    new WhiteDot(x-5.6,y+2,z+1);

    this.add(mesh);

    scene.add(this);

    this.position.x = x;
    this.position.y = y;
    this.position.z = z;

  }
}
