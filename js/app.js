/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var keys_pressed = {}; // stores the keys pressed
var objects = []; // Objects in the scene
var objects_named = {} // object that are named and need to be called

var clock = new THREE.Clock();

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xfffff5 );


    scene.add(new THREE.AxisHelper(10));

    // object creation
    addObject( new Floor(0, -20, 10),  "floor");
    //addObject( new Wall(0, 0, -13),  "wall");
    addObject( new Frame(-15,4,-10), "frame");
    addObject( new Painting(-15,4,-10), "painting");
}

function createLight() {
  // var spotLight = new THREE.SpotLight( 0xffffff );
  // spotLight.position.set( 0, 0, 0 );
  // scene.add(spotLight);

  // var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);
  // scene.add( directionalLight );

  var light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 0, 1, -30 );
  scene.add(light);
  addObject(light, "directionalLight");
}

function turnOnOffLight(){
  let light = getObject("directionalLight");
  if (light.intensity == 1){
    light.intensity = 0;
  } else {
    light.intensity = 1;
  }
  
}

/**
 * Adds an object to the list of tracket objects in the scene
 * @param {DecoratedObject} object - The Object add with "new ObjectName(params)"
 * @param {string} name - (Optional) Name for referencing the object
 */
function addObject(object, name){
  if (typeof name !== "undefined"){ //if it is a named object
    if (objects_named[name] === "undefined") {
      console.log("give the object another name")
    } else {
      objects_named[name]=object;
    }
  }
  objects.push(object); // add object to the generic array of scene objects
}

/**
 * Gets an object of a specified name
 * @param {string} name - Name the object we want
 * @return {SceneObject} object - The Object being retrieved
 */
function getObject(name){
  if (objects_named[name] !== "undefined") {
    return objects_named[name]
  } else {
    console.log("error: object is not in the list")
  }
}

function createCameraPerspective() {
  let perspectiveCamera = new THREE.PerspectiveCamera(70,
    window.innerWidth / window.innerHeight,
    1,
    1000);
  perspectiveCamera.position.x = 0;
  perspectiveCamera.position.y = 0;
  perspectiveCamera.position.z = 70;
  perspectiveCamera.lookAt(scene.position);

  addObject(perspectiveCamera, "perspectiveCamera");
}

function createPaintingCamera() {
  let paintingCamera = new THREE.OrthographicCamera(
  window.innerWidth / - 16, window.innerWidth / 16,
    window.innerHeight / 16, window.innerHeight / - 16,
    -200, 500 );
    paintingCamera.position.x = 0;
    paintingCamera.position.y = 0;
    paintingCamera.position.z = 1;
    //paintingCamera.lookAt(getObject("painting"));
    addObject(paintingCamera, "paintingCamera");
}

function createCameras(){
  createCameraPerspective();
  createPaintingCamera();
  camera = getObject("paintingCamera");
}

function changeCameraPainting(){
  camera = getObject("paintingCamera");
  onResize();
}

function changeCameraPerspective(){
  camera = getObject("perspectiveCamera");
  onResize();
}

function onResize() {
  'use strict';
  var aspect = window.innerWidth / window.innerHeight;
  var frustumSize = 100;

  if (camera === getObject("perspectiveCamera")) {
    camera.aspect = aspect
    //Resizes the output canvas to (width, height) with device pixel ratio taken into account
    renderer.setSize( window.innerWidth, window.innerHeight );

    // Updates the camera projection matrix. Must be called after any change of parameters.
    camera.updateProjectionMatrix();

  } else { // OrthographicCamera
    /*   __________________ ^
     *   |        |       | |
     *   |________|_______| | FrustumSize
     *   |        |       | |
     *   |________|_______| V
     *   <---------------->
     *    FrustumSize * aspect
     */
		camera.left   = - frustumSize * aspect / 2;
		camera.right  =   frustumSize * aspect / 2;
		camera.top    =   frustumSize / 2;
		camera.bottom = - frustumSize / 2;

    // Updates the camera projection matrix. Must be called after any change of parameters.
		camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }
} 

function onKeyUp(e) {
  'use strict';
  keys_pressed[e.keyCode]=false;
}

function onKeyDown(e) {
    'use strict';

    //get here the objects

    keys_pressed[e.keyCode]=true
    for (var key in keys_pressed) {
      if (!keys_pressed[key]) continue;
      switch (key) {
          case "50": //2
              break;
          case "53": //5
              changeCameraPerspective();
              break;
          case "54": //6
              changeCameraPainting();
              break;
          case "81": //Q
              turnOnOffLight();
              break;
          case "87": //w
              getObject("painting").basic_material();
              getObject("frame").basic_material();
              //getObject("wall").basic_material();
              getObject("floor").basic_material();
              //getObject("pedestal").basic_material();
              //getObject("ico").basic_material();
              break;
      }
    }

}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createCameras();
    createLight();

    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    // Update
    objects.map( function(object) {
      if (typeof object.update === 'function') object.update();
    });

    // Display
    render();

    requestAnimationFrame(animate);
}
