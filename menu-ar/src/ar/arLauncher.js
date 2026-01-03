// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// /**
//  * Entry point for AR
//  */
// export async function launchAR({ glb, usdz }) {
//   const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

//   // ---------- iOS → Quick Look ----------
//   if (isIOS) {
//     const a = document.createElement("a");
//     a.setAttribute("rel", "ar");
//     a.setAttribute("href", usdz);
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     return;
//   }

//   // ---------- Android → WebXR ----------
//   if (!navigator.xr) {
//     alert("AR not supported on this device");
//     return;
//   }

//   const supported = await navigator.xr.isSessionSupported("immersive-ar");
//   if (!supported) {
//     alert("AR not supported on this device");
//     return;
//   }

//   startWebXR(glb);
// }

// /**
//  * Floating WebXR AR (NO table scan)
//  */
// async function startWebXR(glbUrl) {
//   const scene = new THREE.Scene();

//   const camera = new THREE.PerspectiveCamera();
//   const renderer = new THREE.WebGLRenderer({
//     alpha: true,
//     antialias: true,
//   });

//   renderer.xr.enabled = true;
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // Light (important for food realism)
//   scene.add(new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1.2));

//   // Load model
//   const loader = new GLTFLoader();
//   const gltf = await loader.loadAsync(glbUrl);
//   const model = gltf.scene;

//   // 🔒 FIXED SCALE (no resize in AR)
//   model.scale.set(1, 1, 1);

//   // 🎯 FLOATING IN FRONT OF USER (no surface detection)
//   model.position.set(0, 0, -0.8);

//   scene.add(model);

//   const session = await navigator.xr.requestSession("immersive-ar", {
//     requiredFeatures: ["local-floor"],
//   });

//   renderer.xr.setSession(session);

//   renderer.setAnimationLoop(() => {
//     renderer.render(scene, camera);
//   });

//   // Cleanup on exit
//   session.addEventListener("end", () => {
//     renderer.setAnimationLoop(null);
//     renderer.domElement.remove();
//   });
// }

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/**
 * Entry point for AR
 */
export async function launchAR({ glb, usdz, dishId }) {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  // ---------- iOS → Quick Look ----------
  if (isIOS) {
    const a = document.createElement("a");
    a.setAttribute("rel", "ar");
    a.setAttribute("href", usdz);
    document.body.appendChild(a);
    a.click();
    a.remove();
    return;
  }

  // ---------- Android → WebXR ----------
  if (!navigator.xr) {
    alert("AR not supported on this device");
    return;
  }

  const supported = await navigator.xr.isSessionSupported("immersive-ar");
  if (!supported) {
    alert("AR not supported on this device");
    return;
  }

  startWebXR(glb, dishId);
}

/**
 * Floating WebXR AR with drag-to-move (NO table scan)
 */
async function startWebXR(glbUrl, dishId) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera();
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.xr.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Lighting
  scene.add(new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1.2));

  // Load model
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(glbUrl);
  const model = gltf.scene;

  // Fixed scale
  model.scale.set(1, 1, 1);

  // Rotate model if it's upside down (e.g., spring rolls)
  // Adjust rotation axis if needed:
  // - X-axis (Math.PI): Flips top to bottom
  // - Y-axis (Math.PI): Flips front to back
  // - Z-axis (Math.PI): Flips left to right
  if (dishId === "spring-rolls") {
    model.rotation.x = Math.PI; // 180 degrees around X-axis (flip vertically)
  }

  // Floating position (camera-relative)
  model.position.set(0, 0, -0.8);
  scene.add(model);

  // --- Drag-to-move state ---
  let isDragging = false;
  let prevX = 0;
  let prevY = 0;
  const movementScale = 0.002;

  const canvas = renderer.domElement;

  canvas.addEventListener("touchstart", (e) => {
    isDragging = true;
    prevX = e.touches[0].clientX;
    prevY = e.touches[0].clientY;
  });

  canvas.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - prevX;
    const deltaY = touch.clientY - prevY;

    model.position.x += deltaX * movementScale;
    model.position.y -= deltaY * movementScale;

    // Lock depth so it doesn't move away
    model.position.z = -0.8;

    // Optional clamp
    model.position.x = Math.max(-1.2, Math.min(1.2, model.position.x));
    model.position.y = Math.max(-1.2, Math.min(1.2, model.position.y));

    prevX = touch.clientX;
    prevY = touch.clientY;
  });

  canvas.addEventListener("touchend", () => {
    isDragging = false;
  });

  const session = await navigator.xr.requestSession("immersive-ar", {
    requiredFeatures: ["local-floor"],
  });

  renderer.xr.setSession(session);

  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });

  session.addEventListener("end", () => {
    renderer.setAnimationLoop(null);
    renderer.domElement.remove();
  });
}
