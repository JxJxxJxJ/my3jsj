// Puedo importar todo lo que necesito desde three.js core usando un solo 
// import statement, esta bueno 
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'https://cdn.skypack.dev/three@0.132.2';

// Guardo la referencia de mi container #scene-container en la variable 
// container para poder usarla mas adelante.
// Uso window.document.querySelector (DOM API) para guardar el primer elemento
// con id `scene-container` que encuentre en mi documento HTML
const container = document.querySelector('#scene-container');

// Creo una escena, Scene es una clase y estoy llamando al constructor sin argumentos.
// scene es una instancia de clase Scene.
const scene = new Scene();

// Elijo el color del background de la escena, si no lo elijo por defecto es negro.
scene.background = new Color('skyblue');

// Creo la camara, el constructor toma 4 argumentos
// fov: que tan ancho es el angulo de vision, en grados
// aspect: el aspect ratio, width/height. Por ej 16:9 y esas cosas
// near: cualquier cosa mas cerca de 0.1 de distancia va a ser invisible
// far: cualquier cosa mas lejos de 0.1 de distancia va a ser invisible 
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;
// Con los 4 parametros, puedo instanciar el objeto camara usando el constructor
// de la clase
const camera = new PerspectiveCamera(fov, aspect, near, far);
// Estos 4 parametros seteados en esta camara estatica generan una especie de
// cono de vision. Tecnicamente se llama viewing frustrum.
// https://en.wikipedia.org/wiki/Viewing_frustum
// Si la escena es un universo peque;o al que accedemos a travez de la camara,
// el frustrum es la parte del universo que se puede ver.

// Todos los objetos son creados inicialmente en las coordenadas (0,0,0)
// incluso la camara. 
// Muevo la camara hacia atras un poco para poder ver la escena.
camera.position.set(0, 0, 10);

// Voy a anadir una mesh, de tama;o de un cubo 
// para eso debo especificar su geometry (cubo) 
// y un material basico (de color blanco)
const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshBasicMaterial();
// Creo la mesh que tiene la geometry y el material que dije
const cube = new Mesh(geometry, material);

// Y AGREGO LA FUCKING MESH A LA ESCENA :O !!!! 
scene.add(cube);

// Ahora creo el renderer para poder verla (abro los ojos) 
const renderer = new WebGLRenderer();

// Seteo que el renderer tenga el mismo tama;o que el container 
renderer.setSize(container.clientWidth, container.clientHeight);

// seteo un buen pixel ratio para que se vea bien en movil (HiDPI displays)
renderer.setPixelRatio(window.devicePixelRatio);

// el renderer dibuja la escena y lo pone en un elemento <canvas> en mi HTML 
container.append(renderer.domElement);

// creo una imagen estatica (renderizo), de la escena 
renderer.render(scene, camera);

