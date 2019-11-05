class Painting extends DecoratedObject {
  constructor(x, y, z) {
    super()
    
    var geometry = new THREE.CubeGeometry(36.45, 36.45, 0.01);

    this.material_basic = new THREE.MeshBasicMaterial( { color: 0xc0c0c0, wireframe: false} );
    this.material_lambert = new THREE.MeshLambertMaterial({ color: 0xc0c0c0, side: THREE.DoubleSide});
    this.material_phong = new THREE.MeshPhongMaterial({ color: 0xc0c0c0, shininess:1 }); //shading: THREE.SmoothShading
  
    this.mesh = new THREE.Mesh(geometry, this.material_phong);
    this.mesh.position.set(x, y , z);

    this.squares = []
    this.addSquares(x,y,z+0.1);

    this.dots = []
    this.addDots(x,y,z+0.1);

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

  addDots(x,y,z){
    this.dots.push(new WhiteDot(x-1.9,y-1.9,z));
    this.dots.push(new WhiteDot(x-1.9,y-5.67,z));
    this.dots.push(new WhiteDot(x-1.9,y+1.9,z));
    this.dots.push(new WhiteDot(x-1.9,y+5.67,z));

    this.dots.push(new WhiteDot(x-5.67,y-1.9,z));
    this.dots.push(new WhiteDot(x-5.67,y-5.67,z));
    this.dots.push(new WhiteDot(x-5.67,y+1.9,z));
    this.dots.push(new WhiteDot(x-5.67,y+5.67,z));

    this.dots.push(new WhiteDot(x+1.9,y-1.9,z));
    this.dots.push(new WhiteDot(x+1.9,y-5.67,z));
    this.dots.push(new WhiteDot(x+1.9,y+1.9,z));
    this.dots.push(new WhiteDot(x+1.9,y+5.67,z));

    this.dots.push(new WhiteDot(x+5.67,y-1.9,z));
    this.dots.push(new WhiteDot(x+5.67,y-5.67,z));
    this.dots.push(new WhiteDot(x+5.67,y+1.9,z));
    this.dots.push(new WhiteDot(x+5.67,y+5.67,z));

  }

  phong_material(){
    this.mesh.material = this.material_phong;
    for(let i=0; i<this.squares.length; i++){
      this.squares[i].phong_material();
    }
    for(let i=0; i<this.dots.length; i++){
      this.dots[i].phong_material();
    }
  }

  basic_material(){ 
    this.mesh.material = this.material_basic;
    for(let i=0; i<this.squares.length; i++){
      this.squares[i].basic_material();
    }
    for(let i=0; i<this.dots.length; i++){
      this.dots[i].basic_material();
    }
  }

  lambert_material(){
    this.mesh.material = this.material_lambert;
    for(let i=0; i<this.squares.length; i++){
      this.squares[i].lambert_material();
    }
    for(let i=0; i<this.dots.length; i++){
      this.dots[i].lambert_material();
    }
  }
}
