//import * as THREE from "three";
import * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";
//import { ARButton } from "three/addons/webxr/ARButton.js"; // for test
//import { ARButton } from "./ARButton.js"; // for test
//import { ARButton } from "https://code4fukui.github.io/three.js_examples/jsm/webxr/ARButton.js"; // NG
//import { ARButton } from "https://code4fukui.github.io/three.js/examples/jsm/webxr/ARButton.js";
//import { XRButton as ARButton } from "https://code4fukui.github.io/vr-makeitrain/XRButton.js"; // ok for Meta Quest, NG for Vision Pro
import { XRButton } from "https://code4fukui.github.io/fisheyes-viewer/XRButton.js";

//export * as THREE from "three";
export * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";

// add css
const link = document.createElement("link");
link.rel = "stylesheet";
const localdebug = false;
const base = localdebug ? "." : "https://code4fukui.github.io/egxr.js";
link.href =  base + "/style.css";
document.head.appendChild(link);

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.01, 1000);
export const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
//renderer.outputEncoding = THREE.sRGBEncoding;
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// add a XR button
//const sessioninit = { spaceType: "local-floor" }; // y 軸の値が床面を 0 とする NG for Meta Quest??
const sessioninit = { spaceType: "local" }; // 閲覧者の位置の近くに原点を持つ追跡空間
// unbounded
// unbounded-floor ?
// boundded-floor
sessioninit.optionalFeatures = ["hand-tracking"];
const xrbtn = XRButton.createButton(renderer, sessioninit);
document.body.appendChild(xrbtn);

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

// for AR
camera.position.y = 1.4;

// handtracking
export const ctrls = [
	renderer.xr.getController(0),
	renderer.xr.getController(1),
];
for (const ctrl of ctrls) {
	if (!ctrl) {
		alert("can't connect controller", i);
		continue;
	}
	ctrl.addEventListener("selectstart", () => ctrl.selected = true);
	ctrl.addEventListener("selectend", () => ctrl.selected = false);
}
