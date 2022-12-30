import * as THREE from "../build/three.module.js";
import { OrbitControls } from "../examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "../examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "../examples/jsm/geometries/TextGeometry.js";
class App {
  constructor() {
    const divContainer = document.querySelector("#geometry-shape-container");
    this._divContainer = divContainer;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    divContainer.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();
    this._setupModel();
    this._setupControls();

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  _setupCamera() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);

    camera.position.x = -15;
    camera.position.z = 15;
    this._camera = camera;
  }

  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    this._scene.add(light);
  }

  // 1. scene 에 라인추가 ( 네모/하트 모형 )
  // _setupModel() {
  //   const shape = new THREE.Shape();
  //   // 네모모형
  //   // shape.moveTo(1, 1);
  //   // shape.lineTo(1, -1);
  //   // shape.lineTo(-1, -1);
  //   // shape.lineTo(-1, 1);
  //   // shape.closePath();

  //   // 하트모형
  //   const x = -2.5,
  //     y = -5;
  //   shape.moveTo(x + 2.5, y + 2.5);
  //   shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  //   shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  //   shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  //   shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 5.5, x + 8, y + 3.5);
  //   shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  //   shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  //   const geometry = new THREE.BufferGeometry();
  //   const points = shape.getPoints();
  //   geometry.setFromPoints(points);

  //   const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //   const line = new THREE.Line(geometry, material);

  //   this._scene.add(line);
  // }

  // 2. group 화 작업( 하트 모형 )
  // _setupModel() {
  //   const shape = new THREE.Shape();

  //   const x = -2.5,
  //     y = -5;
  //   shape.moveTo(x + 2.5, y + 2.5);

  //   // quadraticCurveTo(제어점x, 제어점y, 종료점x, 종료점y)
  //   // bezierCurveTo(제어점x, 제어점y, 제어점x2, 제어점y2, 종료점x, 종료점y)
  //   shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  //   shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  //   shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 8, x + 2.5, y + 9.5);
  //   shape.bezierCurveTo(x + 6, y + 8, x + 8, y + 5.5, x + 8, y + 3.5);
  //   shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  //   shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2, x + 2.5, y + 2.5);

  //   const geometry = new THREE.ShapeGeometry(shape);
  //   const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
  //   const cube = new THREE.Mesh(geometry, fillMaterial);

  //   const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //   const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

  //   const group = new THREE.Group();
  //   group.add(cube);
  //   group.add(line);

  //   this._scene.add(group);
  //   this._cube = group;
  // }

  // 3. TubeGeometry
  // _setupModel() {
  //   class CustomSinCurve extends THREE.Curve {
  //     constructor(scale) {
  //       super();
  //       this.scale = scale;
  //     }

  //     // t 매개변수 방정식 (0과1 사이의 t값에 대한 커브)
  //     getPoint(t) {
  //       const tx = t * 3 - 1.5;
  //       const ty = Math.sin(2 * Math.PI * t);
  //       const tz = 0;
  //       return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  //     }
  //   }

  //   const path = new CustomSinCurve(4);
  //   const geometry = new THREE.TubeGeometry(path, 10, 0.6, 3, true); // TubeGeometry(path, 튜브의 진행방향 분할 수/충(64), 튜브의 원통 반지름(1), 원통 분할 수(8)), 원통 닫을지 여부(false)
  //   const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
  //   const cube = new THREE.Mesh(geometry, fillMaterial);

  //   const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //   const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

  //   const group = new THREE.Group();
  //   group.add(cube);
  //   group.add(line);

  //   this._scene.add(group);
  //   this._cube = group;
  // }

  // 4. 커브
  // _setupModel() {
  //   class CustomSinCurve extends THREE.Curve {
  //     constructor(scale) {
  //       super();
  //       this.scale = scale;
  //     }

  //     // t 매개변수 방정식 (0과1 사이의 t값에 대한 커브)
  //     getPoint(t) {
  //       const tx = t * 3 - 1.5;
  //       const ty = Math.sin(2 * Math.PI * t);
  //       const tz = 0;
  //       return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  //     }
  //   }

  //   const path = new CustomSinCurve(4);
  //   const geometry = new THREE.BufferGeometry();
  //   const points = path.getPoints(30); // 커브를 구성하는 좌표의 개수 (기본값 5)
  //   geometry.setFromPoints(points);

  //   const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //   const line = new THREE.Line(geometry, material);

  //   this._scene.add(line);
  // }

  // 5. LatheGeometry
  // _setupModel() {
  //   const points = [];
  //   for (let i = 0; i < 10; ++i) {
  //     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8));
  //   }

  //   const geometry = new THREE.LatheGeometry(points, 32, 0, Math.PI); // LatheGeometry(path, 분할수(12), 시작각(0), 연장각(2PI))

  //   const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
  //   const cube = new THREE.Mesh(geometry, fillMaterial);

  //   const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //   const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

  //   const group = new THREE.Group();
  //   group.add(cube);
  //   group.add(line);

  //   this._scene.add(group);
  //   this._cube = group;
  // }

  // 5. ExtrudeGeometry
  _setupModel() {
    const x = -2.5,
      y = -5;
    const shape = new THREE.Shape();
    shape.moveTo(x + 2.5, y + 2.5);
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 5.5, x + 8, y + 3.5);
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

    // 베벨링 = 엣지!
    const settings = {
      steps: 2, // 깊이 방향으로의 값 (1) = 단층
      depth: 4, // 깊이 값 (1)
      bevelEnabled: true, // 베벨링 유무 (true)
      bevelThickness: 1, // 베벨링 두께 값(0.2)
      bevelSize: 1, // shape의 외곽선으로부터 얼마나 멀리 베벨링할건지
      bevelSegments: 10, // 베벨링 단계수(1)
    };

    const geometry = new THREE.ExtrudeGeometry(shape, settings); // LatheGeometry(path, 분할수(12), 시작각(0), 연장각(2PI))

    const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
    const cube = new THREE.Mesh(geometry, fillMaterial);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

    const group = new THREE.Group();
    group.add(cube);
    group.add(line);

    this._scene.add(group);
    this._cube = group;
  }

  // 6. TextGeometry
  // _setupModel() {
  //   const fontLoader = FontLoader();
  //   async function loadFont(that) {
  //     const url = "../examples/fonts/helvetiker_regular.typeface.json";
  //     const font = await new Promise((resolve, reject) => {
  //       fontLoader.load(url, resolve, undefined, reject);
  //     });

  //     const geometry = TextGeometry("GIS", {
  //       font: font,
  //       size: 5,
  //       height: 1.5,
  //       curveSegments: 4,
  //       // setting for ExtrudeGeometry
  //       bevelEnabled: true,
  //       bevelThickness: 0.7,
  //       bevelSize: 0.7,
  //       bevelSegments: 2,
  //     });

  //     const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
  //     const cube = new THREE.Mesh(geometry, fillMaterial);

  //     const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //     const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

  //     const group = new THREE.Group();
  //     group.add(cube);
  //     group.add(line);

  //     that._scene.add(group);
  //     that._cube = group;
  //   }

  //   loadFont(this);
  // }

  _setupControls() {
    new OrbitControls(this._camera, this._divContainer);
  }

  // resize
  resize() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }

  render(time) {
    this._renderer.render(this._scene, this._camera); // scene을 카메라 시점으로 랜더링해라
    this.update(time);
    requestAnimationFrame(this.render.bind(this));
  }

  update(time) {
    time *= 0.001; // 상단에서 전달받은 time에 0.001을 곱해 milli-second 단위를 second 단위로 변환
    // this._cube.rotation.x = time;
    // this._cube.rotation.y = time;
  }
}

window.onload = function () {
  new App();
};
