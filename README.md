# egxr.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

**egxr.js** is a lightweight JavaScript library that simplifies the creation of 3D and WebXR (AR/VR) applications by providing a pre-configured [Three.js](https://threejs.org/) environment. It handles the boilerplate setup for scenes, cameras, lighting, and AR session management, allowing you to focus directly on building your 3D content.

## Demo

Explore the live examples: **https://github.com/code4fukui/egxr.js

The main demo page includes links to various geometry and interaction examples.

## Features

-   **Zero-Boilerplate Setup:** Automatically initializes a Three.js scene, camera, renderer, and basic lighting.
-   **Built-in WebXR Support:** Adds an AR button to the page for entering immersive AR experiences on compatible devices.
-   **Hand Tracking:** Includes optional support for hand tracking in WebXR sessions.
-   **Responsive Canvas:** The renderer automatically resizes to fit the window.
-   **ES Module:** Easily import into any modern web project.

## Requirements

-   A modern web browser that supports WebGL and WebXR.
-   For AR features, a device and browser that support WebXR immersive AR sessions.

## Quick Start

Embed `egxr.js` as a module in your HTML file. The library exports a ready-to-use `scene`, `camera`, `renderer`, and the `THREE` namespace.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>egxr.js Quick Start</title>
    <meta charset="utf-8">
  </head>
  <body>
    <script type="module">
      // Import the pre-configured Three.js environment
      import { THREE, scene, camera, renderer } from "https://code4fukui.github.io/egxr.js/egxr.js";

      // Create a 3D object using Three.js
      const geometry = new THREE.BoxGeometry(0.5, 1, 1.5);
      const material = new THREE.MeshBasicMaterial({ color: 0xff0088, wireframe: true });
      const cube = new THREE.Mesh(geometry, material);
      
      // Add the object to the scene
      scene.add(cube);

      // Create an animation loop
      renderer.setAnimationLoop(() => {
        // Position the cube in front of the camera
        cube.position.z = -2;
        // Animate the cube
        cube.rotation.y += 0.01;
        
        // Render the scene
        renderer.render(scene, camera);
      });
    </script>
  </body>
</html>
```

## Core Exports

When you import `egxr.js`, you get access to the following pre-configured variables:

-   `THREE`: The entire Three.js library namespace.
-   `scene`: A `THREE.Scene` instance where you can add your objects.
-   `camera`: A `THREE.PerspectiveCamera` instance.
-   `renderer`: A `THREE.WebGLRenderer` configured for transparency and XR support.
-   `ambientLight`: A soft, ambient light source.
-   `directionalLight`: A directional light source.
-   `ctrls`: An array containing two XR controllers for interaction and hand tracking.

## Examples

The demo page showcases various geometries and features. You can view the source code for each by replacing `.html` with `.js` in the URL of the example.

**1D Geometry**
-   [Line](https://code4fukui.github.io/egxr.js/line.html)
-   [Path](https://code4fukui.github.io/egxr.js/path.html)

**2D Geometry**
-   [Plane](https://code4fukui.github.io/egxr.js/plane.html)
-   [Circle](https://code4fukui.github.io/egxr.js/circle.html)
-   [Ring](https://code4fukui.github.io/egxr.js/ring.html)
-   [Shape](https://code4fukui.github.io/egxr.js/shape.html)

**3D Geometry**
-   [Box](https://code4fukui.github.io/egxr.js/box.html)
-   [Capsule](https://code4fukui.github.io/egxr.js/capsule.html)
-   [Cone](https://code4fukui.github.io/egxr.js/cone.html)
-   [Cylinder](https://code4fukui.github.io/egxr.js/cylinder.html)
-   [Dodecahedron](https://code4fukui.github.io/egxr.js/dodecachedron.html)
-   [Icosahedron](https://code4fukui.github.io/egxr.js/icosahedron.html)
-   [Octahedron](https://code4fukui.github.io/egxr.js/octahedron.html)
-   [Sphere](https://code4fukui.github.io/egxr.js/sphere.html)
-   [Tetrahedron](https://code4fukui.github.io/egxr.js/tetrahedron.html)
-   [Torus](https://code4fukui.github.io/egxr.js/torus.html)
-   [Torus Knot](https://code4fukui.github.io/egxr.js/torusknot.html)

**Interaction**
-   [Hand Tracking](https://code4fukui.github.io/egxr.js/hand.html)

## License

MIT License — see [LICENSE](LICENSE).