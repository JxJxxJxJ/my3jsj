import { World } from './World/World.js';

function main() {
  // Guardo referencia del elemento HTML #scene-container
  const container = document.querySelector('#scene-container');

  // Crear un nuevo mundo
  const world = new World(container);

  // Iniciar la animacion
  world.start();
}

main();
