// Setea el tamaño de la foto (render) segun el tamaño del container
const setSize = (container, camera, renderer) => {
  // Calculo y seteo aspect ratio 
  camera.aspect = container.clientWidth / container.clientHeight;
  // Transformo la camara para mantener proporciones tras resizear
  camera.updateProjectionMatrix();
  // Seteo tamaño y pixel-ratio
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, renderer) {
    // Seteo el size en la primer llamada
    setSize(container, camera, renderer);

    // Seteo el size cada vez que se triggerea el resize event
    window.addEventListener('resize', () => {
      // Seteo el size de nuevo si resizee 
      setSize(container, camera, renderer);
      // Y hago cosas extra SI QUISIESE
      this.onResize();
    });
  }

  // En este caso no hago nada extra 
  onResize() { }
}

export { Resizer };
