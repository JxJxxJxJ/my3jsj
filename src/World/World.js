// Componentes (cosas que pongo en escena)
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

// Sistemas (cosas que operan sobre los componentes u otros sistemas)
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    container.append(renderer.domElement);
    loop = new Loop(camera, scene, renderer);

    // Creo el cubo y la luz 
    const cube = createCube();
    const light = createLights();

    // Y los a;ado a la escena
    scene.add(cube, light);

    loop.updatables.push(cube);

    // Para que al reajustar la ventana el cubo se haga chiquito y grande
    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // Dibuja un solo cuadro
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
