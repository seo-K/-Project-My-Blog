import * as THREE from "../build/three.module.js";
import { OrbitControls } from "../examples/jsm/controls/OrbitControls.js";
// "_"로 사용되는 이름 : App클래스 내부에서만 사용되는 private field, private method
// ㄴ App 바깥에서는 얘네를 부르면 아니되옴.

// 모음집
class App2 {
  constructor() {
    const canvasContainer = document.querySelector("#geometry-container");
    this._canvasContainer = canvasContainer; // field로 정의. (다른 method 에서 참조할 수 있도록)

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio); // 디스플레이 배율 크기
    canvasContainer.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene; // field 화

    this._setupCamera();
    this._setupLight();
    this._setupModel();
    this._setupControls();

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  // three.js 가 3차원 그래픽을 출력할 영역에 대한 가로/세로 깊이
  _setupCamera() {
    const width = this._canvasContainer.clientWidth;
    const height = this._canvasContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    camera.position.z = 10;
    this._camera = camera;
  }

  // 광원 생성 = 광원의 색상, 세기, 광원의 위치
  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity); // 색상과, 세기로 광원 생성
    light.position.set(-1, 2, 4);
    this._scene.add(light); // scene 객체에 구성요소로 추가
  }

  // 모델 생성
  _setupModel() {
    const geometry = new THREE.BoxGeometry(1, 1.5, 1); // (가로, 세로, 깊이)
    const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x44a88 }); // 재질
    // 0. 박스형
    const cube = new THREE.Mesh(geometry, fillMaterial);

    // 선추가
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    // const line = new THREE.LineSegments(geometry, lineMaterial);
    const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

    const cubeGroup = new THREE.Group();
    cubeGroup.add(cube);
    cubeGroup.add(line);

    cubeGroup.position.x = -6;
    cubeGroup.position.y = 5;

    // 1. 원형
    const circleGeometry = new THREE.CircleGeometry(0.7, 12, 0, Math.PI / 2); // [반지름(1), 원판을 구성하는 분할개수/세그먼트 수 = 값이 클수록 완전한 형태의 원형(8), 시작각도(0), 연장각도(2PI = 360도)]
    const circle = new THREE.Mesh(circleGeometry, fillMaterial);
    const circleLine = new THREE.LineSegments(
      new THREE.WireframeGeometry(circleGeometry),
      lineMaterial,
    );

    const circleGroup = new THREE.Group();
    circleGroup.add(circle);
    circleGroup.add(circleLine);

    circleGroup.position.x = -4;
    circleGroup.position.y = 5;

    // 2. 원뿔형
    const coneGeometry = new THREE.ConeGeometry(0.5, 1.2, 5, 2, true, 0, Math.PI / 2); // [반지름(1), 원뿔의 높이(1), 원뿔 둘레 분할개수(8), 원뿔 높이 분햘 개수/층(1), 원뿔 밑면 여부(false), 시작각(0), 연장각( 2PI)]
    const cone = new THREE.Mesh(coneGeometry, fillMaterial);
    const coneLine = new THREE.LineSegments(
      new THREE.WireframeGeometry(coneGeometry),
      lineMaterial,
    );

    const coneGroup = new THREE.Group();
    coneGroup.add(cone);
    coneGroup.add(coneLine);

    coneGroup.position.x = -2;
    coneGroup.position.y = 5;

    // 3. 원통형
    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 1.1, 1.5, 32, 16, true, 0, Math.PI); // [윗면반지름(1), 아랫면반지름(1), 원통의 높이(1), 원통의 둘레 분할개수(8), 원통의 높이 분할 개수(1), 원통 밑면 여부(false), 시작각(0), 연장각( 2PI)]
    const cylinder = new THREE.Mesh(cylinderGeometry, fillMaterial);
    const cylinderLine = new THREE.LineSegments(
      new THREE.WireframeGeometry(cylinderGeometry),
      lineMaterial,
    );

    const cylinderGroup = new THREE.Group();
    cylinderGroup.add(cylinder);
    cylinderGroup.add(cylinderLine);

    cylinderGroup.position.x = 5;
    cylinderGroup.position.y = 5;

    // 4. 구형
    const sphereGeometry = new THREE.SphereGeometry(1.2, 32, 12, 0, Math.PI, 0, Math.PI / 2); // [반지름(1)], 수평방향 분할 수 = 값이 클수록 완전한 형태의 원형(32), 수직방향 분할 수(16) , 수평방향 시작각(0), 수평방향 연장각(2PI), 수직방향 시작각(0), 수직방향 연장각(PI)
    const sphere = new THREE.Mesh(sphereGeometry, fillMaterial);
    const sphereLine = new THREE.LineSegments(
      new THREE.WireframeGeometry(sphereGeometry),
      lineMaterial,
    );

    const sphereGroup = new THREE.Group();
    sphereGroup.add(sphere);
    sphereGroup.add(sphereLine);

    sphereGroup.position.x = -5;
    sphereGroup.position.y = -1;

    // 5. 2차원 링모형
    const ringGeometry = new THREE.RingGeometry(0.7, 1, 16, 3, 0, Math.PI); // [내부반지름(0.5) , 내부반지름(1), 가장자리 둘레방향 분할개수(8), 링내부방향 분할개수(1), 시작각(0), 연장각(2PI)]
    const ring = new THREE.Mesh(ringGeometry, fillMaterial);
    const ringLine = new THREE.LineSegments(
      new THREE.WireframeGeometry(ringGeometry),
      lineMaterial,
    );

    const ringGroup = new THREE.Group();
    ringGroup.add(ring);
    ringGroup.add(ringLine);

    ringGroup.position.x = -5;
    ringGroup.position.y = 1;

    // 6. 2차원 사각형 (gis 지리정보시스템 3차원지형 표현시 유용)
    const planeGeometry = new THREE.PlaneGeometry(2, 1, 3, 2); //[ 너비(1), 높이(1), 너비방향 분할수(1), 높이방향 분할 수(1)]
    const plane = new THREE.Mesh(planeGeometry, fillMaterial);
    const planeLine = new THREE.LineSegments(
      new THREE.WireframeGeometry(planeGeometry),
      lineMaterial,
    );

    const planeGroup = new THREE.Group();
    planeGroup.add(plane);
    planeGroup.add(planeLine);

    planeGroup.position.x = 0;
    planeGroup.position.y = 3;

    // 7. 3차원 반지모형 ( 2차원 원이 360도 돌아가있다고 생각하면됨)
    const torusGeometry = new THREE.TorusGeometry(0.9, 0.4, 24, 10, Math.PI); // [ 반지름(1), 돌아가는 내부원형 반지름 값(0.4), 방사방향(8), 돌아가는 내부원형 수(6), 연장각길이(2PI) ]
    const torus = new THREE.Mesh(torusGeometry, fillMaterial);
    const torusLine = new THREE.LineSegments(
      new THREE.WireframeGeometry(torusGeometry),
      lineMaterial,
    );

    const torusGroup = new THREE.Group();
    torusGroup.add(torus);
    torusGroup.add(torusLine);

    torusGroup.position.x = 1;
    torusGroup.position.y = 5;

    // 8. 매듭모형
    const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.1, 20, 30, 3, 4); // [ 반지름(1), 구성 원통 반지름크기(0.4), 원형 수, 원형내부 분할수,  꺾임반복횟수?, 꺾임 ]
    const torusKnot = new THREE.Mesh(torusKnotGeometry, fillMaterial);
    const torusKnotLine = new THREE.LineSegments(
      new THREE.WireframeGeometry(torusKnotGeometry),
      lineMaterial,
    );

    const torusKnotGroup = new THREE.Group();
    torusKnotGroup.add(torusKnot);
    torusKnotGroup.add(torusKnotLine);

    torusKnotGroup.position.x = 2;
    torusKnotGroup.position.y = 5;

    // 그룹으로 묶기
    const group = new THREE.Group();
    group.add(cubeGroup);
    group.add(circleGroup);
    group.add(coneGroup);
    group.add(cylinderGroup);
    group.add(sphereGroup);
    group.add(ringGroup);
    group.add(planeGroup);
    group.add(torusGroup);
    group.add(torusKnotLine);

    this._scene.add(group);
    this._bigGroup = group;
  }

  // OrbitControls 같은 컨트롤 정의
  _setupControls() {
    new OrbitControls(this._camera, this._canvasContainer);
  }

  // resize
  resize() {
    const width = this._canvasContainer.clientWidth;
    const height = this._canvasContainer.clientHeight;

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
    // this._bigGroup.rotation.x = time;
    // this._bigGroup.rotation.y = time;
  }
}

// 각각 render 한 class
class App3 {
  constructor() {
    const divContainer = document.querySelector("#geometry2-container");
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

    camera.position.z = 2;
    this._camera = camera;
  }

  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    this._scene.add(light);
  }

  _setupModel() {
    // 원형
    const geometry = new THREE.CircleGeometry(0.7, 12, 0, Math.PI / 2); // [반지름(1), 원판을 구성하는 분할개수/세그먼트 수 = 값이 클수록 완전한 형태의 원형(8), 시작각도(0), 연장각도(2PI = 360도)]
    // 원뿔형
    // const geometry = new THREE.ConeGeometry(0.5, 1.2, 5, 2, true, 0, Math.PI / 2); // [반지름(1), 원뿔의 높이(1), 원뿔 둘레 분할개수(8), 원뿔 높이 분햘 개수/층(1), 원뿔 밑면 여부(false), 시작각(0), 연장각( 2PI)]
    // 원통형
    // const geometry = new THREE.CylinderGeometry(0.5, 1.1, 1.5, 32, 16, true, 0, Math.PI); // [윗면반지름(1), 아랫면반지름(1), 원통의 높이(1), 원통의 둘레 분할개수(8), 원통의 높이 분할 개수(1), 원통 밑면 여부(false), 시작각(0), 연장각( 2PI)]
    // 구형
    // const geometry = new THREE.SphereGeometry(1.2, 32, 12, 0, Math.PI, 0, Math.PI / 2); // [반지름(1)], 수평방향 분할 수 = 값이 클수록 완전한 형태의 원형(32), 수직방향 분할 수(16) , 수평방향 시작각(0), 수평방향 연장각(2PI), 수직방향 시작각(0), 수직방향 연장각(PI)
    // 2차원 링모형
    // const geometry = new THREE.RingGeometry(0.7, 1, 16, 3, 0, Math.PI); // [내부반지름(0.5) , 내부반지름(1), 가장자리 둘레방향 분할개수(8), 링내부방향 분할개수(1), 시작각(0), 연장각(2PI)]
    // 2차원 사각형 (gis 지리정보시스템 3차원지형 표현시 유용)
    // const geometry = new THREE.PlaneGeometry(2, 1, 3, 2); //[ 너비(1), 높이(1), 너비방향 분할수(1), 높이방향 분할 수(1)]
    // 3차원 반지모형 ( 2차원 원이 360도 돌아가있다고 생각하면됨)
    // const geometry = new THREE.TorusGeometry(0.9, 0.4, 24, 10, Math.PI); // [ 반지름(1), 돌아가는 내부원형 반지름 값(0.4), 방사방향(8), 돌아가는 내부원형 수(6), 연장각길이(2PI) ]
    // 매듭모형
    // const geometry = new THREE.TorusKnotGeometry(0.5, 0.1, 20, 30, 3, 4); // [ 반지름(1), 구성 원통 반지름크기(0.4), 원형 수, 원형내부 분할수,  꺾임반복횟수?, 꺾임 ]

    const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x44a88 });
    const cube = new THREE.Mesh(geometry, fillMaterial);

    // 선추가
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

    // 그룹으로 묶기
    const group = new THREE.Group();
    group.add(cube);
    group.add(line);

    this._scene.add(group);
    this._cube = group;
  }

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

new App2();
new App3();
// window.onload = function () {
//   new App3();
// };
