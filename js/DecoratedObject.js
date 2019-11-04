/**
 * Generic Object - basically a decorated THREE.js Object3D
 */
class DecoratedObject extends THREE.Object3D {
  constructor() {
    super();

    // Physics Variables
    this.material1 = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, wireframe: false} );
    // this.material1 = new THREE.MeshBasicMaterial({ color: 0x8b4513, wireframe: true });
    this.material2 = new THREE.MeshBasicMaterial({ color: 0x8080a0, wireframe: false });
    this.dof = new THREE.Vector3( 0, 0, 0 ); // facing direction
    this.velocity = 0//= new THREE.Vector3( 0, 0, 0 );
    this.acceleration = 0 //= new THREE.Vector3( 0, 0, 0 );
  }

/**
 * Scales the Velocity by a factor
 */
  change_velocity(value) {
    this.velocity = value;
    this.position.x += this.velocity * Math.sin(this.rotation.y);
    this.position.z += this.velocity* Math.cos(this.rotation.y);
  }

  // accepts value in degrees
  rotate(value) {
    this.rotation.y += Math.PI*2*(value/360);
  }

  // update function is called to update the object
  update() {  }

  revertWireframe(){
    this.material1.wireframe = !this.material1.wireframe;
    this.material2.wireframe = !this.material2.wireframe;
  }
}
