class Projector extends DecoratedObject {
  constructor(x, y, z, degreesx, degreesz, target_name) {
    super()
    
    this.addLamp(x,y,z);
    this.addCover(x,y,z);

    this.group = new THREE.Object3D();

    this.group.add(this.cover);
    this.group.add(this.lamp);

    this.group.rotateX(THREE.Math.degToRad(degreesx));
    this.group.rotateZ(THREE.Math.degToRad(degreesz));
  

    this.spotLight = new THREE.SpotLight( 0xfdfdfd, 0, 100, THREE.Math.degToRad(170),0.2, 0.9 );
    // this.spotLight.position.set( x, y, z );
    let object = getObject(target_name);
    this.spotLight.target.position.set(object.position.x,object.position.y, object.position.z) 
    this.spotLight.rotateX(THREE.Math.degToRad(degreesx));
    this.spotLight.rotateZ(THREE.Math.degToRad(degreesz));


    // var spotLightHelper = new THREE.SpotLightHelper( this.spotLight );
    // scene.add( spotLightHelper );

    
    
    this.group.position.x = x;
    this.group.position.y = y;
    this.group.position.z = z;
    
    this.spotLight.position.x = x;
    this.spotLight.position.y = y;
    this.spotLight.position.z = z;
    
    scene.add(this.spotLight);
    scene.add(this.group);
  }

  addLamp(x,y,z){
    var geometry =  new THREE.SphereGeometry( 4, 32, 32 );

    let material_phong = new THREE.MeshPhongMaterial( { color: 0xFCE5CD, specular: 0xFCE5CD, shininess: 100 } );
    this.lamp = new THREE.Mesh(geometry, material_phong);
    //this.lamp.position.set(x - 1*Math.cos(THREE.Math.degToRad(degreesx)), y -6- 1*Math.sin(THREE.Math.degToRad(degreesz)) , z -1*Math.sin(THREE.Math.degToRad(degreesz)));
    this.lamp.position.set(0,0-6,0);

    this.add(this.lamp);
    
  }
  
  addCover(x,y,z){
    var geometry = new THREE.ConeGeometry( 5, 12, 32 );
    
    let material_phong = new THREE.MeshPhongMaterial( { color: 0x0C343D, shininess: 100 } );
    this.cover = new THREE.Mesh(geometry, material_phong);
    // this.cover.rotateX(THREE.Math.degToRad(degreesx));
    // this.cover.rotateZ(THREE.Math.degToRad(degreesz));
    // this.cover.position.set(x,y,z);
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

  light(){
    if (this.spotLight.intensity == 0.7){
      this.spotLight.intensity = 0;
    } else {
      this.spotLight.intensity = 0.7;
    }
  }
}
