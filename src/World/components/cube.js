import {
  TorusKnotGeometry,
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  MeshDepthMaterial,
  MeshPhongMaterial,
} from 'three';

function createCube() {
  // Lo llamo cube porque es la geometry mas basica, pero aca uso otra mas piola
  let spec = {
    radius: 10,
    tube: 3,
    tubularSegments: 100,
    radialSegments: 16,
    p: 3,
    q: 4,
  }

  const geometry = new TorusKnotGeometry(...Object.values(spec));

  // Puedo poner todas las specifications en un objeto y mandar eso como argumento
  spec = {
    shininess: 100,
    specular: 'red',
  }
  // StandardMaterial usa la luz
  const material = new MeshPhongMaterial(spec);

  const cube = new Mesh(geometry, material);

  // Rotacion inicial 
  cube.rotation.set(-0.5, -0.1, 0.1);

  const radiansPerSecond = MathUtils.degToRad(30);

  // Este metodo sera llamado una vez por frame
  cube.tick = (delta) => {
    // Roto el cubo en cada dimension un poquito en cada frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
