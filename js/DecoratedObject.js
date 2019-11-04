/**
 * Generic Object - basically a decorated THREE.js Object3D
 */
class DecoratedObject extends THREE.Object3D {
  constructor() {
    super();
  
    this.material1 = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, wireframe: false} );
    this.material2 = new THREE.MeshBasicMaterial({ color: 0x8080a0, wireframe: false });
    this.material_phong = new THREE.MeshPhongMaterial( { color: 0x8080a0, specular: 0x555555, shininess: 30 } );
  }

  // update function is called to update the object
  update() {  }

  //changes the material of the objects
  phong_material(){ }
  basic_material(){ }
  lambert_material(){}
}
