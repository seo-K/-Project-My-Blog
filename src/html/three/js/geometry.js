import * as THREE from "../build/three.module.js";
import { OrbitControls } from "../examples/jsm/controls/OrbitControls.js";
// "_"로 사용되는 이름 : App클래스 내부에서만 사용되는 private field, private method
// ㄴ App 바깥에서는 얘네를 부르면 아니되옴.

class App {
  constructor() {
    const divContainer = document.querySelector("#geometry-container");
    this._divContainer = divContainer; // field로 정의. (다른 method 에서 참조할 수 있도록)

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio); // 디스플레이 배율 크기
    divContainer.appendChild(renderer.domElement);
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
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);

    camera.position.z = 2;
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
    const cube = new THREE.Mesh(geometry, fillMaterial);

    // 선추가
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    // const line = new THREE.LineSegments(geometry, lineMaterial);
    const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

    // 그룹으로 묶기
    const group = new THREE.Group();
    group.add(cube);
    group.add(line);

    this._scene.add(group);
    this._cube = group;
  }

  // OrbitControls 같은 컨트롤 정의
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
