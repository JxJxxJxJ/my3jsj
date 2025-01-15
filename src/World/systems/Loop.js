import { Clock } from 'three';

const clock = new Clock();

// Clase Loop
class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = []; // Arreglo de objetos animables
  }

  // Metodo para iniciar el loop
  start() {
    this.renderer.setAnimationLoop(() => {
      // Muevo el 'reloj universal' 1 tick para decirle a cada objeto animado
      // que se mueva un frame
      this.tick();
      // Dibujo un frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  // Metodo para detener el loop
  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    // llamo la funcion getDelta una vez por frame 
    const delta = clock.getDelta();

    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );

    // Itero sobre el arreglo de objetos animados y llamo al metodo .tick() de cada
    // uno de ellos. El objeto sera el que determine que sucede cuando hago .tick()
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
