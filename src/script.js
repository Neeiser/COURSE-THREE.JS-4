/* 
Lo script di JS è il centro nevraligico per la gestione, 
infatti nel file indexed.html non c'è link al JS, invece sul file JS c'è il link al CSS.
Per richiamare il modulo di THREE.JS devo importare TUTTO con:
import * as THREE from 'three'
Quindi dicendo ass "THREE" creo un nome che richiamerò ogni volta che mi servirà gestire le cose.
*/


import './style.css'
import * as THREE from 'three'


const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)


//Sizes

const sizes = {
    width: 800,
    height: 600
}


//Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


//Renderer

const canvas = document.querySelector(".webgl")

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)