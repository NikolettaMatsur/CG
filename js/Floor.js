class Floor extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CubeGeometry(90, 3, 20);

    this.material_basic = new THREE.MeshBasicMaterial( { color: 0xdaa520, vertexColors: THREE.FaceColors, wireframe: false} );
    this.material_lambert = new THREE.MeshLambertMaterial({ color: 0xdaa520, emissive: 0x2a2a2a, emissiveIntensity: .5, side: THREE.DoubleSide});
    this.material_phong = new THREE.MeshPhongMaterial( { color: 0xdaa520, specular: 0x555555, shininess: 30 } );

    this.mesh = new THREE.Mesh(geometry, this.material_phong);
    this.mesh.position.set(x, y , z);

    // for (let i = 0; i < geometry.faces.length; i+=2 ) {
    //     let color = Math.round(Math.random() * 0xffffff);
    //     geometry.faces[ i ].color.setHex(color);
    //     geometry.faces[ i+1 ].color.setHex(color);
    // }
  
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
