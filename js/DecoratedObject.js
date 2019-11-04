/**
 * Generic Object - basically a decorated THREE.js Object3D
 */
class DecoratedObject extends THREE.Object3D {
  constructor() {
    super();
  }

  // update function is called to update the object
  update() {  }

  //changes the material of the objects
  phong_material(){ }
  basic_material(){ }
  lambert_material(){}
}
