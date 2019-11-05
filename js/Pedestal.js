class WhiteDot extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CylinderGeometry(1, 1, 0.01, 20);

    //var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: false} );
    this.material_basic = new THREE.MeshBasicMaterial( { color: 0xFFFFFF,  wireframe: false} );
    this.material_phong = new THREE.MeshPhongMaterial( { color: 0xFFFFFF, specular: 0xFFFFFF, shininess: 1 } );
    this.material_lambert = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide});
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
