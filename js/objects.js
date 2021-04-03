// Wall texture (from pintrest): https://www.bittbox.com/freebies/free-texture-tuesday-metal

let wallLength = 400;
let wallHeight = 50;
let wallWidth = 3

let MIN_SIZE = -200
let MAX_SIZE = 200

var wallText;

    
    // Wall texture
    wallText = new THREE.TextureLoader().load("./raw/wallText2.jpg", function ( texture ){
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( 50, 0 );
      });

      _createMainWall()

      _addLampPosts()

      _createMazeWall()

       

function _addLampPosts(){
    // code for lamps
}


function _createMazeWall(){
    // code for maze wall
}


function _createMainWall(){
 // Main wall -->
 const wallf = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,wallLength),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wallf.position.set(MIN_SIZE, wallHeight/2, 0);         // x, y, z (since we did rotation, y is Up/down)
    wallf.material.color.setHex(0xff0000) // color (makes it bright)
  scene.add(wallf);

  const wallb = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight,wallLength),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wallb.position.set(MAX_SIZE, wallHeight/2, 0);         // x, y, z (since we did rotation, y is Up/down)
    wallb.material.color.setHex(0xff0000) 
  scene.add(wallb);

  const walll = new THREE.Mesh(
    new THREE.BoxGeometry(wallLength, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    walll.position.set(0, wallHeight/2, MAX_SIZE);         // x, y, z (since we did rotation, y is Up/down)
    walll.material.color.setHex(0xff0000) 
  scene.add(walll);

  const wallr = new THREE.Mesh(
    new THREE.BoxGeometry(wallLength, wallHeight,wallWidth),
    new THREE.MeshPhongMaterial({
        map:wallText
      })) // length, width, height
    wallr.position.set(0, wallHeight/2, MIN_SIZE);         // x, y, z (since we did rotation, y is Up/down)
    wallr.material.color.setHex(0xff0000) 
  scene.add(wallr);

  // <-- End Main Wall 
}



