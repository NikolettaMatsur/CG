class Painting extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CubeGeometry(36, 36, 4);

    this.material_basic = new THREE.MeshBasicMaterial( { color: 0xf0f0f0, wireframe: false} );
    this.material_lambert = new THREE.MeshLambertMaterial({ color: 0xf0f0f0, side: THREE.DoubleSide});
    this.material_phong = new THREE.MeshPhongMaterial({ color: 0xf0f0f0, shininess:100 }); //shading: THREE.SmoothShading
  
    this.mesh = new THREE.Mesh(geometry, this.material_phong);
    this.mesh.position.set(x, y , z);

    this.squares = []
    this.addSquares(x,y,z);

    this.add(this.mesh);

    scene.add(this);

    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
  }

  addSquares(x,y,z){
    this.squares.push(new BlackSquare(x-7.6,y+7.6,z));
    this.squares.push(new BlackSquare(x-7.6,y+7.6/2,z));
    this.squares.push(new BlackSquare(x-7.6,y,z));
    this.squares.push(new BlackSquare(x-7.6,y-7.6/2,z));
    this.squares.push(new BlackSquare(x-7.6,y-7.6,z));

    this.squares.push(new BlackSquare(x-7.6/2,y+7.6,z));
    this.squares.push(new BlackSquare(x-7.6/2,y+7.6/2,z));
    this.squares.push(new BlackSquare(x -7.6/2,y,z));
    this.squares.push(new BlackSquare(x-7.6/2,y-7.6/2,z));
    this.squares.push(new BlackSquare(x-7.6/2,y-7.6,z));

    this.squares.push(new BlackSquare(x,y+7.6,z));
    this.squares.push(new BlackSquare(x,y+7.6/2,z));
    this.squares.push(new BlackSquare(x,y,z));
    this.squares.push( new BlackSquare(x,y-7.6/2,z));
    this.squares.push(new BlackSquare(x,y-7.6,z));

    this.squares.push(new BlackSquare(x+7.6/2,y+7.6,z));
    this.squares.push(new BlackSquare(x+7.6/2,y+7.6/2,z));
    this.squares.push(new BlackSquare(x+7.6/2,y,z));
    this.squares.push(new BlackSquare(x+7.6/2,y-7.6/2,z));
    this.squares.push(new BlackSquare(x+7.6/2,y-7.6,z));

    this.squares.push(new BlackSquare(x+7.6,y+7.6,z));
    this.squares.push(new BlackSquare(x+7.6,y+7.6/2,z));
    this.squares.push(new BlackSquare(x+7.6,y,z));
    this.squares.push(new BlackSquare(x+7.6,y-7.6/2,z));
    this.squares.push(new BlackSquare(x+7.6,y-7.6,z));
  }

  phong_material(){
    this.mesh.material = this.phong_material;
    for(let i=0; i<this.squares.length; i++){
      this.squares[i].phong_material();
    }
  }

  basic_material(){ 
    this.mesh.material = this.basic_material;
    for(let i=0; i<this.squares.length; i++){
      this.squares[i].basic_material();
    }
  }

  lambert_material(){
    this.mesh.material = this.lambert_material;
    for(let i=0; i<this.squares.length; i++){
      this.squares[i].lambert_material();
    }
  }
}
