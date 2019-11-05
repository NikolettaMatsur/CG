class Projector extends DecoratedObject {
  constructor(x, y, z, degreesx, degreesz) {
    super()
    
    this.addLamp(x,y,z);
    this.addCover(x,y,z);

    this.group = new THREE.Object3D();

    this.group.add(this.cover);
    this.group.add(this.lamp);

    this.group.rotateX(THREE.Math.degToRad(degreesx));
    // this.group.rotateZ(THREE.Math.degToRad(degreesz));
    this.group.updateMatrix();

    scene.add(this.group);

    this.group.position.x = x;
    this.group.position.y = y;
    this.group.position.z = z;

  }

  addLamp(x,y,z){
    var geometry =  new THREE.SphereGeometry( 4, 32, 32 );

    let material_phong = new THREE.MeshPhongMaterial( { color: 0xE1E14D, specular: 0x4a2700, shininess: 100 } );
    this.lamp = new THREE.Mesh(geometry, material_phong);
    //this.lamp.position.set(x - 1*Math.cos(THREE.Math.degToRad(degreesx)), y -6- 1*Math.sin(THREE.Math.degToRad(degreesz)) , z -1*Math.sin(THREE.Math.degToRad(degreesz)));
    this.lamp.position.set(x,y-6,z);

    this.add(this.lamp);
    
  }
  
  addCover(x,y,z){
    var geometry = new THREE.ConeGeometry( 5, 12, 32 );
    
    let material_phong = new THREE.MeshPhongMaterial( { color: 0x0C343D, shininess: 100 } );
    this.cover = new THREE.Mesh(geometry, material_phong);
    // this.cover.rotateX(THREE.Math.degToRad(degreesx));
    // this.cover.rotateZ(THREE.Math.degToRad(degreesz));
    this.cover.position.set(x,y,z);
    this.add(this.cover);
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
