class Icosahedron extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    this.createIcosahedron();

    //var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: false} );
    this.material_basic = new THREE.MeshBasicMaterial( { color: 0xE69138,  wireframe: false} );
    this.material_phong = new THREE.MeshPhongMaterial( { color: 0xE69138, specular: 0x291B1E, shininess: 100 } );
    this.material_lambert = new THREE.MeshLambertMaterial({ color: 0xE69138, side: THREE.DoubleSide});
    this.mesh = new THREE.Mesh(this.geometry, this.material_phong);
    this.mesh.position.set(x, y , z);

    this.mesh.scale.multiplyScalar(7);

    this.add(this.mesh);

    scene.add(this);

    this.position.x = x;
    this.position.y = y;
    this.position.z = z;

  }
  createIcosahedron(){
    let fi = (1+Math.sqrt(5)/2); //1.61
    this.geometry = new THREE.Geometry();

    this.geometry.vertices.push(
        new THREE.Vector3(-1.1, fi, 0), //10  0
        new THREE.Vector3(1.3, fi, 0),  //8   1
        new THREE.Vector3(-1.4, -fi, 0), //11 2
        new THREE.Vector3(1.56, -fi, 0), //9   3

        new THREE.Vector3(0, -1.67, fi), //1   4
        new THREE.Vector3(0, 1.32, fi), //0    5
        new THREE.Vector3(0, -1.9, -fi), //2  6
        new THREE.Vector3(0, 1, -fi), //3   7

        new THREE.Vector3(fi,0,-1.42), //5     8
        new THREE.Vector3(fi,0,1.17),  //4     9
        new THREE.Vector3(-fi,0,-1.15), //7    10
        new THREE.Vector3(-fi,0,1.02), //6     11


          // - 1,  t,  0,    1,  t,  0,   - 1, - t,  0,    1, - t,  0,
          //  0, - 1,  t,    0,  1,  t,    0, - 1, - t,    0,  1, - t,
          //  t,  0, - 1,    t,  0,  1,   - t,  0, - 1,   - t,  0,  1
          
          );
          
          // var indices = [
          //    0, 11,  5,    0,  5,  1,    0,  1,  7,    0,  7, 10,    0, 10, 11,
          //    1,  5,  9,    5, 11,  4,   11, 10,  2,   10,  7,  6,    7,  1,  8,
          //    3,  9,  4,    3,  4,  2,    3,  2,  6,    3,  6,  8,    3,  8,  9,
          //    4,  9,  5,    2,  4, 11,    6,  2, 10,    8,  6,  7,    9,  8,  1
          // ];
        
    this.geometry.faces.push(
        new THREE.Face3(0, 11, 5),
        new THREE.Face3(0, 5, 1),
        new THREE.Face3(0, 1, 7),
        new THREE.Face3(0, 11, 5),
        new THREE.Face3(0, 10, 11),
        new THREE.Face3(1, 5, 9),
        new THREE.Face3(5, 11, 4),
        new THREE.Face3(11, 10, 2),
        new THREE.Face3(10, 7, 6),
        new THREE.Face3(7, 1, 8),
        new THREE.Face3(3, 9, 4),
        new THREE.Face3(3, 4, 2),
        new THREE.Face3(3, 2, 6),
        new THREE.Face3(3, 6, 8),
        new THREE.Face3(3, 8, 9),
        new THREE.Face3(4, 9, 5),
        new THREE.Face3(2, 4, 11),
        new THREE.Face3(6, 2, 10),
        new THREE.Face3(8, 6, 7),
        new THREE.Face3(9, 8, 1),
    );

    // normalize the geometry
    this.geometry.normalize();

     // compute Normals
    this.geometry.computeVertexNormals();
 
 
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
