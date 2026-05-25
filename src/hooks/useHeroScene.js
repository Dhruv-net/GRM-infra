import { useEffect } from 'react'
import * as THREE from 'three'

/*
 * Port of the original hero-3d.js: a tower crane carrying two loads
 * (a green BESS container on the inner hook, a blue solar panel on the outer).
 * Runs against the #hero-canvas inside the given container ref.
 */
export function useHeroScene(ref) {
  useEffect(() => {
    const canvas = ref.current?.querySelector('#hero-canvas')
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200)
    camera.position.set(16, 11, 24)
    camera.lookAt(0, 6.5, 0)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    function resize() {
      const w = canvas.clientWidth || canvas.parentElement.clientWidth
      const h = canvas.clientHeight || canvas.parentElement.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    const root = new THREE.Group()
    scene.add(root)

    const GREEN = 0x34d399
    const BLUE = 0x4d7cc4
    const BLUE_DEEP = 0x1e3a5f
    const AMBER = 0xfbbf24
    const BONE = 0xf5f3ee
    const FAINT = 0x244038

    function wireBox(w, h, d, color, opacity = 0.85) {
      const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, d))
      return new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color, transparent: true, opacity }))
    }
    function fillBox(w, h, d, color, opacity = 0.06) {
      return new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity })
      )
    }
    function makeLine(p1, p2, color, opacity = 0.7) {
      const g = new THREE.BufferGeometry()
      g.setAttribute('position', new THREE.Float32BufferAttribute([p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]], 3))
      return new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity }))
    }

    // Ground
    const grid = new THREE.GridHelper(60, 60, FAINT, FAINT)
    grid.material.transparent = true
    grid.material.opacity = 0.32
    root.add(grid)
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 60),
      new THREE.MeshBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.55 })
    )
    plane.rotation.x = -Math.PI / 2
    plane.position.y = -0.001
    root.add(plane)

    // Tower crane (lattice mast)
    const TOWER_H = 11
    const TOWER_W = 0.95
    const SEGS = 11
    const segH = TOWER_H / SEGS
    const tower = new THREE.Group()
    for (let i = 0; i < SEGS; i++) {
      const yb = i * segH
      const half = TOWER_W / 2
      ;[[-half, -half], [half, -half], [-half, half], [half, half]].forEach(([x, z]) => {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.05, 0.05, segH, 6),
          new THREE.MeshBasicMaterial({ color: AMBER })
        )
        post.position.set(x, yb + segH / 2, z)
        tower.add(post)
      })
      const cap = wireBox(TOWER_W, 0.04, TOWER_W, AMBER, 0.9)
      cap.position.set(0, yb + segH, 0)
      tower.add(cap)
      ;[-half, half].forEach((zSign) => {
        tower.add(makeLine([-half, yb, zSign], [half, yb + segH, zSign], AMBER, 0.55))
        tower.add(makeLine([half, yb, zSign], [-half, yb + segH, zSign], AMBER, 0.55))
      })
      ;[-half, half].forEach((xSign) => {
        tower.add(makeLine([xSign, yb, -half], [xSign, yb + segH, half], AMBER, 0.5))
        tower.add(makeLine([xSign, yb, half], [xSign, yb + segH, -half], AMBER, 0.5))
      })
    }
    const base = wireBox(2.4, 0.6, 2.4, AMBER, 0.85)
    base.position.y = 0.3
    tower.add(base)
    const baseFill = fillBox(2.4, 0.6, 2.4, AMBER, 0.12)
    baseFill.position.y = 0.3
    tower.add(baseFill)
    root.add(tower)

    // Operator cab
    const cab = new THREE.Group()
    cab.add(fillBox(1.5, 1.1, 1.3, 0x1a1a1a, 0.5))
    cab.add(wireBox(1.5, 1.1, 1.3, AMBER, 0.85))
    const cabWin = fillBox(1.52, 0.4, 1.32, GREEN, 0.25)
    cabWin.position.y = 0.2
    cab.add(cabWin)
    cab.position.set(0, TOWER_H + 0.6, 0.6)
    root.add(cab)

    // Jib
    const jib = new THREE.Group()
    jib.position.set(0, TOWER_H + 1.2, 0)
    function buildJibArm(length, dir) {
      const g = new THREE.Group()
      const segs = Math.max(4, Math.round(length / 0.85))
      const segL = length / segs
      const top = 0.6, bot = 0.0, side = 0.42
      for (let i = 0; i < segs; i++) {
        const x0 = i * segL * dir
        const x1 = (i + 1) * segL * dir
        g.add(makeLine([x0, top, 0], [x1, top, 0], AMBER, 0.95))
        g.add(makeLine([x0, bot, -side], [x1, bot, -side], AMBER, 0.95))
        g.add(makeLine([x0, bot, side], [x1, bot, side], AMBER, 0.95))
        g.add(makeLine([x0, bot, -side], [x0, bot, side], AMBER, 0.65))
        g.add(makeLine([x0, bot, -side], [x0, top, 0], AMBER, 0.6))
        g.add(makeLine([x0, bot, side], [x0, top, 0], AMBER, 0.6))
        g.add(makeLine([x0, bot, -side], [x1, top, 0], AMBER, 0.45))
        g.add(makeLine([x0, top, 0], [x1, bot, side], AMBER, 0.45))
      }
      const tip = length * dir
      g.add(makeLine([tip, bot, -side], [tip, bot, side], AMBER, 0.7))
      g.add(makeLine([tip, bot, -side], [tip, top, 0], AMBER, 0.7))
      g.add(makeLine([tip, bot, side], [tip, top, 0], AMBER, 0.7))
      return g
    }
    const RIGHT_LEN = 8.5
    const LEFT_LEN = 3.4
    jib.add(buildJibArm(RIGHT_LEN, +1))
    jib.add(buildJibArm(LEFT_LEN, -1))

    const apexY = 2.6
    const apex = new THREE.Group()
    apex.add(makeLine([-0.4, 0, 0], [0, apexY, 0], AMBER, 0.85))
    apex.add(makeLine([0.4, 0, 0], [0, apexY, 0], AMBER, 0.85))
    apex.add(makeLine([0, 0, -0.4], [0, apexY, 0], AMBER, 0.85))
    apex.add(makeLine([0, 0, 0.4], [0, apexY, 0], AMBER, 0.85))
    jib.add(apex)
    jib.add(makeLine([0, apexY, 0], [RIGHT_LEN * 0.95, 0.55, 0], AMBER, 0.7))
    jib.add(makeLine([0, apexY, 0], [-LEFT_LEN * 0.95, 0.55, 0], AMBER, 0.7))

    const cwGroup = new THREE.Group()
    cwGroup.add(wireBox(1.1, 0.9, 1.0, AMBER, 0.95))
    cwGroup.add(fillBox(1.1, 0.9, 1.0, AMBER, 0.25))
    cwGroup.position.set(-2.7, -0.05, 0)
    jib.add(cwGroup)

    const TROLLEY_A_X = 3.4
    const TROLLEY_B_X = 6.8
    function makeTrolley(x) {
      const g = new THREE.Group()
      g.add(fillBox(0.55, 0.18, 0.65, AMBER, 0.4))
      g.add(wireBox(0.55, 0.18, 0.65, AMBER, 0.95))
      g.position.set(x, -0.08, 0)
      return g
    }
    jib.add(makeTrolley(TROLLEY_A_X), makeTrolley(TROLLEY_B_X))
    root.add(jib)

    // Cables + loads
    const cableA = makeLine([0, 0, 0], [0, -1, 0], BONE, 0.55)
    root.add(cableA)

    const bess = new THREE.Group()
    bess.add(fillBox(2.6, 1.3, 1.15, GREEN, 0.22))
    bess.add(wireBox(2.6, 1.3, 1.15, GREEN, 0.95))
    for (let i = -1; i <= 1; i++) {
      const door = wireBox(0.84, 1.0, 0.001, GREEN, 0.65)
      door.position.set(i * 0.85, -0.05, 0.575)
      bess.add(door)
    }
    for (let i = 0; i < 5; i++) {
      const v = fillBox(2.2, 0.018, 0.05, GREEN, 0.75)
      v.position.set(0, 0.66, -0.42 + i * 0.21)
      bess.add(v)
    }
    const spreaderA = wireBox(2.8, 0.1, 0.22, AMBER, 0.95)
    spreaderA.position.y = 0.82
    bess.add(spreaderA)
    bess.add(makeLine([-1.2, 0.82, 0], [-1.2, 0.65, -0.5], BONE, 0.55))
    bess.add(makeLine([1.2, 0.82, 0], [1.2, 0.65, -0.5], BONE, 0.55))
    bess.add(makeLine([-1.2, 0.82, 0], [-1.2, 0.65, 0.5], BONE, 0.55))
    bess.add(makeLine([1.2, 0.82, 0], [1.2, 0.65, 0.5], BONE, 0.55))
    bess.position.set(TROLLEY_A_X, 6.2, 0)
    root.add(bess)

    const cableB1 = makeLine([0, 0, 0], [0, -1, 0], BONE, 0.55)
    const cableB2 = makeLine([0, 0, 0], [0, -1, 0], BONE, 0.55)
    root.add(cableB1, cableB2)

    const solarLoad = new THREE.Group()
    const spreaderB = wireBox(2.6, 0.1, 0.2, AMBER, 0.95)
    spreaderB.position.y = 0.7
    solarLoad.add(spreaderB)
    solarLoad.add(makeLine([-1.0, 0.7, 0], [-1.1, 0.05, -0.25], BONE, 0.55))
    solarLoad.add(makeLine([1.0, 0.7, 0], [1.1, 0.05, -0.25], BONE, 0.55))
    solarLoad.add(makeLine([-1.0, 0.7, 0], [-1.1, 0.05, 0.25], BONE, 0.55))
    solarLoad.add(makeLine([1.0, 0.7, 0], [1.1, 0.05, 0.25], BONE, 0.55))

    const panel = new THREE.Group()
    const PW = 2.6, PH = 1.3
    panel.add(new THREE.Mesh(
      new THREE.PlaneGeometry(PW, PH),
      new THREE.MeshBasicMaterial({ color: BLUE_DEEP, transparent: true, opacity: 0.7, side: THREE.DoubleSide })
    ))
    panel.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(PW, PH, 0.04)),
      new THREE.LineBasicMaterial({ color: BLUE, transparent: true, opacity: 1.0 })
    ))
    for (let cx = 1; cx < 6; cx++) {
      const x = -PW / 2 + (cx * PW) / 6
      panel.add(makeLine([x, -PH / 2, 0.025], [x, PH / 2, 0.025], BLUE, 0.85))
    }
    for (let cy = 1; cy < 3; cy++) {
      const y = -PH / 2 + (cy * PH) / 3
      panel.add(makeLine([-PW / 2, y, 0.025], [PW / 2, y, 0.025], BLUE, 0.7))
    }
    const shimmer = new THREE.Mesh(
      new THREE.PlaneGeometry(PW, 0.1),
      new THREE.MeshBasicMaterial({ color: BONE, transparent: true, opacity: 0.5 })
    )
    shimmer.position.z = 0.04
    panel.add(shimmer)
    panel.rotation.x = -Math.PI / 2 + 0.2
    panel.position.y = -0.18
    solarLoad.add(panel)
    solarLoad.position.set(TROLLEY_B_X, 6.6, 0)
    root.add(solarLoad)

    // Footprints
    function footprint(x, z, w, d, color) {
      const g = wireBox(w, 0.02, d, color, 0.5)
      g.position.set(x, 0.011, z)
      return g
    }
    root.add(footprint(TROLLEY_A_X, 0, 3.2, 1.7, GREEN))
    root.add(footprint(TROLLEY_B_X, 0, 3.4, 1.9, BLUE))
    root.add(footprint(0, 0, 2.8, 2.8, AMBER))

    // Atmosphere
    const sparkGeo = new THREE.BufferGeometry()
    const sparkPos = []
    for (let i = 0; i < 160; i++) {
      sparkPos.push((Math.random() - 0.5) * 30, Math.random() * 14, (Math.random() - 0.5) * 24)
    }
    sparkGeo.setAttribute('position', new THREE.Float32BufferAttribute(sparkPos, 3))
    const sparks = new THREE.Points(
      sparkGeo,
      new THREE.PointsMaterial({ color: GREEN, size: 0.05, transparent: true, opacity: 0.5, sizeAttenuation: true })
    )
    scene.add(sparks)

    // Mouse parallax
    let mx = 0, my = 0, tmx = 0, tmy = 0
    const onMouse = (e) => {
      tmx = e.clientX / window.innerWidth - 0.5
      tmy = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', onMouse)

    function setLineWorld(line, ax, ay, az, bx, by, bz) {
      const pos = line.geometry.attributes.position
      pos.array[0] = ax; pos.array[1] = ay; pos.array[2] = az
      pos.array[3] = bx; pos.array[4] = by; pos.array[5] = bz
      pos.needsUpdate = true
    }

    let raf
    const t0 = performance.now()
    function tick() {
      const t = (performance.now() - t0) / 1000
      mx += (tmx - mx) * 0.04
      my += (tmy - my) * 0.04
      root.rotation.y = -0.45 + Math.sin(t * 0.12) * 0.06 + mx * 0.3
      root.rotation.x = my * 0.04
      jib.rotation.y = Math.sin(t * 0.15) * 0.08

      const swayA = Math.sin(t * 0.5) * 0.2
      const swayB = Math.sin(t * 0.4 + 0.8) * 0.25
      bess.position.x = TROLLEY_A_X + swayA * 0.45
      bess.position.z = swayA * 0.3
      bess.position.y = 6.2 + Math.sin(t * 0.7) * 0.05
      bess.rotation.y = swayA * 0.3
      bess.rotation.z = swayA * 0.04
      solarLoad.position.x = TROLLEY_B_X + swayB * 0.55
      solarLoad.position.z = swayB * 0.3
      solarLoad.position.y = 6.6 + Math.sin(t * 0.6 + 1.2) * 0.05
      solarLoad.rotation.y = swayB * 0.4
      panel.rotation.z = Math.sin(t * 0.6) * 0.05

      const jx = 0, jy = TOWER_H + 1.2
      setLineWorld(cableA, jx + TROLLEY_A_X, jy - 0.1, 0, bess.position.x, bess.position.y + 0.9, bess.position.z)
      setLineWorld(cableB1, jx + TROLLEY_B_X - 0.9, jy - 0.1, 0, solarLoad.position.x - 1.0, solarLoad.position.y + 0.7, solarLoad.position.z)
      setLineWorld(cableB2, jx + TROLLEY_B_X + 0.9, jy - 0.1, 0, solarLoad.position.x + 1.0, solarLoad.position.y + 0.7, solarLoad.position.z)

      shimmer.position.x = -PW / 2 + ((t * 0.45) % 1) * PW
      shimmer.material.opacity = 0.3 + 0.3 * Math.abs(Math.sin(t * 0.6))
      sparks.rotation.y = t * 0.04
      sparks.position.y = 0.5 + Math.sin(t * 0.25) * 0.3

      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      renderer.dispose()
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          mats.forEach((m) => m.dispose())
        }
      })
    }
  }, [ref])
}
