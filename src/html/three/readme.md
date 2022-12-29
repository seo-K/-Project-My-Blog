# Three js

- Renderer - Scene(장면) - Light (광원)
-                        ㄴMesh (Object3D) - Geometry (형상 정의)
-                                          ㄴMaterial (색상 및 투명도)
-          ㄴ Camera (시점 = 카메라)

# BufferGeometry

## 메쉬, 선, 점 기하학의 표현입니다.

- BoxGeometry (박스)
  - ex) const geometry = new THREE.BoxGeometry(1, 1, 1); (가로,세로,깊이)
- CircleGeometry (원형)
  - ex) CircleGeometry(1, 8, 0, Math.PI X 2); [반지름, 원판을 구성하는 분할개수/세그먼트 수 = 값이 클수록 완전한 형태의 원형(기본8), 시작각도, 연장각도(기본 2PI = 360도)]
- ConeGeometry (원뿔형)
  - ex) ConeGeometry(1, 1, 8, 1, false, 0, Math.PI X 2); [반지름, 높이, 둘레 분할개수, 높이 분햘 개수/층, 밑면 여부, 시작각, 연장각]
- CylinderGeometry (원통형)
  - ex) CylinderGeometry(1, 1, 1, 8, 1, false, 0, Math.PI X 2); [윗면반지름, 아랫면반지름, 높이, 둘레 분할개수, 높이 분할 개수, 밑면 여부, 시작각, 연장각]
- SphereGeometry (구형)
  - ex) SphereGeometry(1, 32, 16, 0, Math.PI X 2, 0, PI) [반지름, 수평방향 분할 수, 수직방향 분할 수 , 수평방향 시작각, 수평방향 연장각, 수직방향 시작각, 수직방향 연장각]
- RingGeometry (링모형)
  - ex) RingGeometry(0.5, 1, 8, 1, 0, Math.PI X 2); // [내부반지름 , 내부반지름, 가장자리 둘레방향 분할개수, 링내부방향 분할개수, 시작각, 연장각]
- PlaneGeometry (사각형) (gis 지리정보시스템 3차원지형 표현시 유용)
  - ex) PlaneGeometry(1, 1, 1, 1); //[ 너비, 높이, 너비방향 분할수, 높이방향 분할 수]
- TorusGeometry (반지모형) (2차원 원이 360도 돌아가있다고 생각하면됨)
  - ex) TorusGeometry(1, 0.4, 8, 6, Math.PI X 2 ); // [ 반지름, 돌아가는 내부원형 반지름 값, 방사방향, 돌아가는 내부원형 수, 연장각길이]
- TorusKnotGeometry (매듭모형)

  - ex) TorusKnotGeometry(1, 0.4, 20, 30, 3, 4); // [ 반지름, 구성 원통 반지름크기, 원형 수, 원형내부 분할수, 꺾임반복횟수?, 꺾임 ]

- ExtrudeGeometry
- TextGeometry
- LatheGeometry
- ParametricGeometry (수학적 함수식에 2개의 값을 입력하여 얻을 수 있는 좌표로 구성)
- TubeGeometry
- EdgesGeometry (기하학을 구성하는 인접면의 각도에 따라 기하학을 재구성)
- ShapeGeometry
- WireframeGeometry (외각선 추가)

- PolyhedronGeometry
  - (IcosahedronGeometry [20면체], OctahedronGeometry [8면체], DodecahedronGeometry [12면체],TetrahedronGeometry [4면체])

### bufferGeometry

- 정점(Vertex) = xyz 좌표
- 정점 인덱스(Vertex Index) = 면을 구성
- 수직 벡터(Normal Vector)
- 정점 색상(Vertex Color)
- 텍스트 멥핑을 위한 UV 좌표
- 사용자 정의 데이터
