import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  // Activo el modelo de iluminacion fisicamente correcto
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
