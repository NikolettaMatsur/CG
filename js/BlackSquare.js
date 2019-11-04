class BlackSquare extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CubeGeometry(6, 6, 2);

    this.material_basic = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: false} );
    this.material_phong = new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x555555, shininess: 30 } );
    this.material_lambert = new THREE.MeshLambertMaterial({ color: 0x000000, side: THREE.DoubleSide});

    this.mesh = new THREE.Mesh(geometry, this.material_phong);
    this.mesh.position.set(x, y , z);
  
    this.add(this.mesh);

    scene.add(this);

    this.position.x = x;
    this.position.y = y;
    this.position.z = z;

  }

  phong_material(){ 
    this.mesh.material = this.material_phong;
  }

  basic_material(){
    this.mesh.material = this.material_basic;
  }

  lambert_material(){
    this.mesh.material = this.material_lambert;
  }
}
