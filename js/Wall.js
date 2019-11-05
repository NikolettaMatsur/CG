class Wall extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CubeGeometry(150, 90, 3);

    this.material_basic = new THREE.MeshBasicMaterial( { color: 0xfffff5, wireframe: false} );
    this.material_phong = new THREE.MeshPhongMaterial( { color: 0xfffff5, shininess: 50 } );
    this.material_lambert = new THREE.MeshLambertMaterial({ color: 0xfffff5, emissive: 0x2a2a2a, emissiveIntensity: 0, side: THREE.DoubleSide});

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
