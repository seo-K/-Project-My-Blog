import * as THREE from "../build/three.module.js";
// "_"로 사용되는 이름 : App클래스 내부에서만 사용되는 private field, private method
// ㄴ App 바깥에서는 얘네를 부르면 아니되옴.

class App5 {
  constructor() {
    const divContainer = document.querySelector("#scene-graph-container");
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

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  _setupCamera() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);

    camera.position.z = 25;
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
    // ------- 태양 생성
    const solarSystem = new THREE.Object3D();
    this._scene.add(solarSystem);

    const radius = 1; // 반지름
    const widthSegments = 12;
    const heightSegments = 12;
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    const sunMaterial = new THREE.MeshPhongMaterial({
      emissive: 0xffff00,
      flatShading: true,
    }); // 재질 선언

    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    sunMesh.scale.set(3, 3, 3); // x,y,x 값이며, 원래 geometry 가 갖는 크기보다 xyz 축에 대해 3배 크기로 표시하기 위함.
    solarSystem.add(sunMesh);

    // ------- 지구 추가하기
    // 1. 지구 객체 생성
    // 2. 태양의 자식으로 지구를 추가하는 코드
    // 3. 지구에대한 재질 추가
    const earthOrbit = new THREE.Object3D();
    solarSystem.add(earthOrbit);

    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
      flatShading: true,
    });

    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    earthOrbit.position.x = 10; // 태양에서 x축으로 10만큼 떨어진 위치
    earthOrbit.add(earthMesh);

    // ------- 달 추가하기
    const moonOrbit = new THREE.Object3D();
    moonOrbit.position.x = 2;
    earthOrbit.add(moonOrbit);

    const moonMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      emissive: 0x222222,
      flatShading: true,
    });

    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    moonMesh.scale.set(0.5, 0.5, 0.5); // 크기 지정
    moonOrbit.add(moonMesh);

    this._solarSystem = solarSystem; // 다른곳에서도 해당 메서드 사용위해
    this._earthOrbit = earthOrbit; // 다른곳에서도 해당 메서드 사용위해
    this._moonOrbit = moonOrbit; // 다른곳에서도 해당 메서드 사용위해
  } // _setupModal

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
    this._solarSystem.rotation.y = time / 2;
    // this._earthOrbit.rotation.y = time * 2;
    this._moonOrbit.rotation.y = time * 5;
  }
}

new App5();
// window.onload = function () {
//   new App5();
// };
