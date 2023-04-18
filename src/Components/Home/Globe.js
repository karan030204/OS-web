import * as THREE from "three";

export class Globe extends THREE.Object3D {
  constructor() {
    super();

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/earth.jpg");

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshPhongMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);
  }

  update() {
    this.rotation.y += 0.005;
  }
}
