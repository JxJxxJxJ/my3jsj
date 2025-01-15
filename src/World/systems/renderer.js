import { WebGLRenderer } from 'three';

function createRenderer() {
  const spec = {
    antialias: true,
  }
  const renderer = new WebGLRenderer(spec);

  // Activo el modelo de iluminacion fisicamente correcto
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
