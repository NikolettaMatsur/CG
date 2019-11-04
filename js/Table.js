/**
* Table Object & related functions
*/
class Table extends DecoratedObject {
    constructor(x, y, z) {
      super();
      
      this.wheels = [];
      this.name = "Table"
  
      this.addTableTop(  0,  0,  0);
      
      const positiony = 2.5;
      const radius = 4;
      
      const total = (positiony + radius) * -1;
      
      this.addTableWheel(25-radius,total,15-radius);
      this.addTableWheel(25-radius,total,-15+radius);
      this.addTableWheel(-25+radius,total,15-radius);
      this.addTableWheel(-25+radius,total,-15+radius);
      
      this.addTopSphere(0,positiony,0);
      
      scene.add(this);
      
      this.position.x = x;
      this.position.y = y;
      this.position.z = z;
    }
    
    addTableTop( x, y, z) {
      var geometry = new THREE.CubeGeometry(50, 5, 30);
      var mesh = new THREE.Mesh(geometry, this.material1);
      mesh.position.set(x, y , z);

      var brown_colors = [0xA0522D, 0x663300, 0xa65221, 0xa63a12, 0x994c00];
      var which_brown;
      for ( var i = 0; i < geometry.faces.length; i+=2 ) {
          which_brown = Math.round(Math.random() * (4));
          geometry.faces[ i ].color.setHex( brown_colors[which_brown]);
          geometry.faces[ i+1 ].color.setHex( brown_colors[which_brown]);
      }
  
      this.add(mesh);
    }

    addTableWheel( x, y, z) {
      'use strict';
      // (radius, numero de cortes verticais (seta azul, z) , numero de cortes da esfera em cada metade da esfera y (seta p cima )
      var geometry = new THREE.SphereGeometry(4, 11, 6);
      var mesh = new THREE.Mesh(geometry, this.material2);
      mesh.position.set(x,y,z);
      this.wheels.push(mesh);
      this.add(mesh);
    }
  
    addTopSphere( x, y, z){
      'use strict';
      //radius, vertical corte (em z), numero de camadas em y,
      var geometry = new THREE.SphereGeometry(6, 10, 6, 0, Math.PI*2, 0, Math.PI /2);
      var mesh = new THREE.Mesh(geometry, this.material2);
      mesh.position.set(x,y,z);
      this.add(mesh);
    }
  
  }
  