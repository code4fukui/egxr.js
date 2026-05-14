# egxr.js

**egxr.js** は、[Three.js](https://threejs.org/) の事前設定済み環境を提供することで、3DおよびWebXR（AR/VR）アプリケーションの作成を簡略化する軽量なJavaScriptライブラリです。シーン、カメラ、照明、ARセッション管理などの定型的なセットアップ（ボイラープレート）を自動的に処理し、3Dコンテンツの構築に直接集中できるようにします。

## デモ

ライブデモをご覧ください: **https://github.com/code4fukui/egxr.js

メインデモページには、さまざまなジオメトリやインタラクションの例へのリンクが含まれています。

## 機能

-   **ボイラープレート不要のセットアップ:** Three.jsのシーン、カメラ、レンダラー、基本的な照明を自動的に初期化します。
-   **WebXRの組み込みサポート:** 互換性のあるデバイスで没入型AR体験を開始するためのARボタンをページに追加します。
-   **ハンドトラッキング:** WebXRセッションでのハンドトラッキングをオプションでサポートします。
-   **レスポンシブなキャンバス:** レンダラーはウィンドウサイズに合わせて自動的にリサイズされます。
-   **ESモジュール:** モダンなWebプロジェクトに簡単にインポートできます。

## 必要条件

-   WebGLおよびWebXRをサポートするモダンなWebブラウザ。
-   AR機能を利用するには、WebXRの没入型ARセッションをサポートするデバイスとブラウザが必要です。

## クイックスタート

HTMLファイルに `egxr.js` をモジュールとして埋め込みます。このライブラリは、即座に使用可能な `scene`、`camera`、`renderer`、および `THREE` 名前空間をエクスポートします。

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

## コアエクスポート

`egxr.js` をインポートすると、以下の事前設定済み変数にアクセスできます:

-   `THREE`: Three.jsライブラリの完全な名前空間。
-   `scene`: オブジェクトを追加できる `THREE.Scene` インスタンス。
-   `camera`: `THREE.PerspectiveCamera` インスタンス。
-   `renderer`: 透過（アルファ）とXRサポートが設定された `THREE.WebGLRenderer` インスタンス。
-   `ambientLight`: 柔らかい環境光（アンビエントライト）。
-   `directionalLight`: 平行光源（ディレクショナルライト）。
-   `ctrls`: インタラクションとハンドトラッキング用の2つのXRコントローラーを含む配列。

## 例

デモページではさまざまなジオメトリや機能を紹介しています。各例のソースコードは、URLの `.html` を `.js` に置き換えることで確認できます。

**1Dジオメトリ**
-   [ライン](https://code4fukui.github.io/egxr.js/line.html)
-   [パス](https://code4fukui.github.io/egxr.js/path.html)

**2Dジオメトリ**
-   [平面](https://code4fukui.github.io/egxr.js/plane.html)
-   [円](https://code4fukui.github.io/egxr.js/circle.html)
-   [リング](https://code4fukui.github.io/egxr.js/ring.html)
-   [シェイプ](https://code4fukui.github.io/egxr.js/shape.html)

**3Dジオメトリ**
-   [ボックス](https://code4fukui.github.io/egxr.js/box.html)
-   [カプセル](https://code4fukui.github.io/egxr.js/capsule.html)
-   [コーン](https://code4fukui.github.io/egxr.js/cone.html)
-   [シリンダー](https://code4fukui.github.io/egxr.js/cylinder.html)
-   [十二面体](https://code4fukui.github.io/egxr.js/dodecachedron.html)
-   [二十面体](https://code4fukui.github.io/egxr.js/icosahedron.html)
-   [八面体](https://code4fukui.github.io/egxr.js/octahedron.html)
-   [球体](https://code4fukui.github.io/egxr.js/sphere.html)
-   [四面体](https://code4fukui.github.io/egxr.js/tetrahedron.html)
-   [トーラス](https://code4fukui.github.io/egxr.js/torus.html)
-   [トーラスノット](https://code4fukui.github.io/egxr.js/torusknot.html)

**インタラクション**
-   [ハンドトラッキング](https://code4fukui.github.io/egxr.js/hand.html)

## ライセンス

MIT License — [LICENSE](LICENSE) を参照してください。
