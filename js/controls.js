

function init() {
  
  // testing box 
    const box = new THREE.Mesh(
        new THREE.BoxGeometry(20, 20,20)) 
        box.position.set(-10, 10, 1);         // x, y, z (since we did rotation, y is Up/down)
        box.material.color.setHex(0xffffff)  // color of box
      scene.add(box);

      const menuPanel = document.getElementById('menuPanel');
      const startButton = document.getElementById('startButton');
      startButton.addEventListener('click', function () {
          controls.lock();
      }, false);

      const controls = new PointerLockControls(camera, renderer.domElement);
        //controls.addEventListener('change', () => console.log("Controls Change"))
        controls.addEventListener('lock', () => menuPanel.style.display = 'none');
        controls.addEventListener('unlock', () => menuPanel.style.display = 'block');

}


init()
