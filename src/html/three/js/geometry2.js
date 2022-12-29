import * as THREE from "../build/three.module.js";
import { OrbitControls } from "../examples/jsm/controls/OrbitControls.js";

class App {
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

window.onload = function () {
  new App();
};
