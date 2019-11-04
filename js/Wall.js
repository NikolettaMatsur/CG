class Wall extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CubeGeometry(window.innerWidth/2, window.innerHeight/2, 5);
    var mesh = new THREE.Mesh(geometry, this.material1);
    mesh.position.set(x, y , z);

    for (let i = 0; i < geometry.faces.length; i+=2 ) {
        let color = Math.round(Math.random() * 0xffffff);
        geometry.faces[ i ].color.setHex(color);
        geometry.faces[ i+1 ].color.setHex(color);
    }
  
    this.add(mesh);

    scene.add(this);

    this.position.x = x;
    this.position.y = y;
    this.position.z = z;

  }
}
