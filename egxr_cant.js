const importmap = {
	"imports": {
		"three": "https://code4fukui.github.io/three.js/build/three.module.js",
		"three/addons/": "https://code4fukui.github.io/three.js/examples/jsm/"
	}
};
const s = document.createElement("script");
s.type = "importmap";
s.textContent = JSON.stringify(importmap, null, 2);
document.head.appendChild(s);

const egxr = await import("egxr_core.js");
console.log(egxr);

export const THREE = 0;
export const scene = 0;
export const renderer = 0;
export const camera = 0;
