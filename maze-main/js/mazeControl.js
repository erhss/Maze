// https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_pointerlock.html Used
// https://www.youtube.com/watch?v=5bc9AN87QtM
// https://sbcode.net/threejs/pointerlock-controls/
// https://threejs.org/examples/?q=pointer#misc_controls_pointerlock

var clock = new THREE.Clock();

// testing box 
// const box = new THREE.Mesh(
//     new THREE.BoxGeometry(20, 20, 20))
// box.position.set(50, 10, -70);         // x, y, z (since we did rotation, y is Up/down)
// box.material.color.setHex(0x0000ff)  // color of box
// scene.add(box);

const menuPanel = document.getElementById('menuPanel');
const startButton = document.getElementById('startButton');



startButton.addEventListener('click', function () {
    controls.lock();
    document.body.requestFullscreen();
}, false);

const controls = new THREE.PointerLockControls(camera, document.body);
//controls.addEventListener('change', () => console.log("Controls Change"))
controls.addEventListener('lock', () => menuPanel.style.display = 'none');
controls.addEventListener('unlock', () => menuPanel.style.display = 'block');

let keyboard = [];
addEventListener('keydown', (e)=>{
    keyboard[e.key] = true;
});

addEventListener('keyup', (e)=>{
    keyboard[e.key] = false;
});


function processKeyboard(delta){            // Uses time-delta so that speed is not dependent on framerate
    let speed = 50;
    let actualSpeed = speed * delta;

    if (keyboard['w'] || keyboard['ArrowUp']){
        controls.moveForward(actualSpeed);
    }

    if (keyboard['s'] || keyboard['ArrowDown']){
        controls.moveForward(-actualSpeed)
    }

    if (keyboard['a']){
        controls.moveRight(-actualSpeed);
    }

    if (keyboard['d']){
        controls.moveRight(actualSpeed);
    }
}



function drawScene() {
    renderer.render(scene, camera);
    let delta = clock.getDelta();
    processKeyboard(delta);
    requestAnimationFrame(drawScene);
}

drawScene();


