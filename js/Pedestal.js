class Pedestal extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CylinderGeometry(8, 3, 15, 32);

    //var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: false} );
    this.material_basic = new THREE.MeshBasicMaterial( { color: 0x801A35,  wireframe: false} );
    this.material_phong = new THREE.MeshPhongMaterial( { color: 0x801A35, specular: 0x4a2700, shininess: 100 } );
    this.material_lambert = new THREE.MeshLambertMaterial({ color: 0x801A35, side: THREE.DoubleSide});
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
