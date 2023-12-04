//import * as THREE from "three";
import * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";
//import { ARButton } from "three/addons/webxr/ARButton.js";
import { ARButton } from "https://code4fukui.github.io/three.js/examples/jsm/webxr/ARButton.js";

//export * as THREE from "three";
export * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";

// add css
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./style.css";
document.head.appendChild(link);

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
export const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
//renderer.outputEncoding = THREE.sRGBEncoding;
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// add a XR button
const arbtn = ARButton.createButton(renderer);
document.body.appendChild(arbtn);

// support resizing
addEventListener("resize", () => {
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(innerWidth, innerHeight);
}, false);

// add lights
export const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
scene.add(ambientLight);

export const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);
