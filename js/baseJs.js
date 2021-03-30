
var scene, camera, renderer; // local variables scene, camera, renderer

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );            // sets camera variables
  
  camera.position.set(90, 15, 25);  // sets camera position inside the cube

  renderer = new THREE.WebGLRenderer({ antialias: true });  // antiailas
  renderer.setSize(window.innerWidth, window.innerHeight);  // render size
  renderer.domElement.id = "canvas";                        // dom id for html
  document.body.appendChild(renderer.domElement);           // dom


  const texture = new THREE.CubeTextureLoader().load([    // skybox loader. Generates skybox for maze
      './raw/posx.jpg',
      './raw/negx.jpg',
      './raw/posy.jpg',
      './raw/negy.jpg',
      './raw/posz.jpg',
      './raw/negz.jpg',
  ]);
  scene.background = texture;                           // sets the background for the scene as cubebox


  const plane = new THREE.Mesh(             // creates a plane and mesh
  new THREE.BoxGeometry(400, 400,1))      // creates a square cube plane for terrain
  plane.material.color.setHex( 0xF8F8F8 );
  plane.rotation.x = -Math.PI/2;          // Make the plane horizontal instead of vertical
  scene.add(plane);

    
  // controls for zooming
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enabled = true;
  controls.minDistance = 0;
  controls.maxDistance = 500;


  animate();
}

function animate() {                                     // renders (on a different function for future controls)
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  
}

init();                                                  // initialize the display (runs at start)
