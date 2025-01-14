import {
  DirectionalLight,
  PointLight,
  RectAreaLight,
} from 'three';

function createLights() {
  // Crea una luz
  const spec = {
    color: 'peachpuff',
    intensity: 15000,
    distance: 0,
    decay: 2,
  };
  const light = new PointLight(...Object.values(spec));
  light.castShadow = true;

  // La luz esta iluminando de forma direccional desde (x,y,z) 
  let x = 50;
  let y = 50;
  let z = 50;
  light.position.set(x, y, z);

  // // Hacia (u,v,w) (default es (0,0,0))
  // SOLO SI FUESE DIRECTIONAL
  // const u = -10;
  // const v = 5;
  // const w = 50;
  // light.target.position.set(u, v, w);

  return light;
}

export { createLights };
