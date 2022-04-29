const canvas = document.querySelector('#canvas');
const container = document.getElementById( 'player' );

let width = window.innerWidth,
    height = window.innerHeight;

/*--------------------
renderers
--------------------*/
const cssRenderer = new THREE.CSS3DRenderer();
container.appendChild( cssRenderer.domElement );

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  logarithmicDepthBuffer: true,
  alpha: true
});
const scene = new THREE.Scene();

const setup = () => {
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize(width, height);
  renderer.setClearColor(0xebebeb, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMapSoft = true;
  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = THREE.sRGBEncoding;

  cssRenderer.setSize( width, height );
  //scene.fog = new THREE.Fog(0x383838, 1, 10000);
}
setup();

const aspectRatio = width / height;
const fieldOfView = 50;
const nearPlane = 0.1;
const farPlane = 10000;
var camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
camera.position.x = 800;
camera.position.y = 700;
camera.position.z = 2400;
camera.setFocalLength(125);
camera.lookAt( 0, 130, 0 );

/*--------------------
lights
--------------------*/
let hemispshereLight, shadowLight, light2;
const createLights = () => {
	hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 2)
  
	shadowLight = new THREE.DirectionalLight(0xff8f16, .4);
	shadowLight.position.set(-80, 450, 350);
	shadowLight.castShadow = true;

	shadowLight.shadow.camera.left = -650;
	shadowLight.shadow.camera.right = 650;
	shadowLight.shadow.camera.top = 650;
	shadowLight.shadow.camera.bottom = -650;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 1000;

	shadowLight.shadow.mapSize.width = 4096;
	shadowLight.shadow.mapSize.height = 4096;
  
  light2 = new THREE.DirectionalLight(0xfff150, .25);
	light2.position.set(-600, 350, 350);
  
  light3 = new THREE.DirectionalLight(0xfff150, .15);
	light3.position.set(0, -250, 300);

	scene.add(hemisphereLight);
	scene.add(shadowLight);
  scene.add(light2);
  scene.add(light3);
}
createLights()

/*--------------------
texture -unused
--------------------*/
// instantiate a loader
// const textures = []
// textures[0] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 0_Cache_Cylinder 0_Beauty.jpg');
// textures[1] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 1_Cache_Cylinder 1_Beauty.jpg');
// textures[2] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 2_Cache_Cylinder 2_Beauty.jpg');
// textures[3] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 3_Cache_Cylinder 3_Beauty.jpg');
// textures[4] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 4_Cache_Cylinder 4_Beauty.jpg');
// textures[5] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 5_Cache_Cylinder 5_Beauty.jpg');
// textures[6] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 6_Cache_Cylinder 6_Beauty.jpg');
// textures[7] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 7_Cache_Cylinder 7_Beauty.jpg');
// textures[8] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 8_Cache_Cylinder 8_Beauty.jpg');
// textures[9] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 9_Cache_Cylinder 9_Beauty.jpg');
// textures[10] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 10_Cache_Cylinder 10_Beauty.jpg');
// textures[11] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 11_Cache_Cylinder 11_Beauty.jpg');
// textures[12] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 12_Cache_Cylinder 12_Beauty.jpg');
// textures[13] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 13_Cache_Cylinder 13_Beauty.jpg');
// textures[14] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 14_Cache_Cylinder 14_Beauty.jpg');
// textures[15] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 15_Cache_Cylinder 15_Beauty.jpg');
// textures[16] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 16_Cache_Cylinder 16_Beauty.jpg');
// textures[17] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 17_Cache_Cylinder 17_Beauty.jpg');
// textures[18] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 18_Cache_Cylinder 18_Beauty.jpg');
// textures[19] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 19_Cache_Cylinder 19_Beauty.jpg');
// textures[20] = new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cloner_Cache_Null_Cylinder 20_Cache_Cylinder 20_Beauty.jpg');
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cube_7_Cache_Cube_7_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cylinder_4_Cache_Cylinder_4_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cylinder_3_Cache_Cylinder_3_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cube_6_Cache_Cube_6_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Sphere_1_Cache_Sphere_1_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cylinder_2_Cache_Cylinder_2_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cube_5_Cache_Cube_5_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cube_4_Cache_Cube_4_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Sphere_Cache_Sphere_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cylinder_1_Cache_Cylinder_1_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cylinder_Cache_Cylinder_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cube_3_Cache_Cube_3_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cube_2_Cache_Cube_2_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Cube_1_Cache_Cube_1_Beauty.jpg'))
// textures.push(new THREE.TextureLoader().load('assets/tex/qmaintsuprise_AOV_Plane_Cache_Plane_Cache_Plane_Beauty.jpg'))

// const texMats = []
// textures.forEach(tex => {
//   tex.encoding = THREE.sRGBEncoding;
//   tex.flipY = false;
//   texMats.push(new THREE.MeshBasicMaterial( { map: tex } ))
// });
//var testMat = new THREE.MeshBasicMaterial( { map: textures[0] } );

/*--------------------
materials
--------------------*/
const mats = []
mats[0] = new THREE.MeshStandardMaterial({//color: 0xB9E3C6,    
  emissive: 0xB9E3C6,
  emissiveIntensity: 0.5,
  roughness: 0.61,
  metalness: 0.21,
  side: THREE.FrontSide});
mats[1] = new THREE.MeshStandardMaterial({//color: 0x59C9A5
  emissive: 0x59C9A5,
  emissiveIntensity: 0.5,
  roughness: 0.61,
  metalness: 0.21,
  side: THREE.FrontSide});
mats[2] = new THREE.MeshStandardMaterial({//color: 0xD81E5B
  emissive: 0xD81E5B,
  emissiveIntensity: 0.5,
  roughness: 0.61,
  metalness: 0.21,
  side: THREE.FrontSide});
mats[3] = new THREE.MeshStandardMaterial({//color: 0x23395B
  emissive: 0x23395B,
  emissiveIntensity: 0.5,
  roughness: 0.61,
  metalness: 0.21,
  side: THREE.FrontSide});
mats[4] = new THREE.MeshStandardMaterial({//color: 0xFFFD98
  emissive: 0xFFFD98,
  emissiveIntensity: 0.5,
  roughness: 0.61,
  metalness: 0.21,
  side: THREE.FrontSide});
mats[5] = new THREE.MeshStandardMaterial({//color: 0x373737
  emissive: 0x373737,
  emissiveIntensity: 0.5,
  roughness: 0.61,
  metalness: 0.21,
  side: THREE.FrontSide});

/*--------------------
GLTF stuff
--------------------*/
const loadModels = () => {
  const loader = new THREE.GLTFLoader();
  loader.load(
    // resource URL
    'assets/qmingsurprise.gltf',
    // called when the resource is loaded
    function ( gltf ) {
      model = gltf.scene
      model.traverse((o) => {
       if (o.isMesh) {
          o.material = mats[Math.floor(Math.random() * 6)];
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });
      scene.add( gltf.scene );
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // called when loading has errors
    function ( error ) {
      console.log( 'An error happened' );
    }
  );
}
loadModels()


/*--------------------
text stuff
--------------------*/

const genRandomText = () => {
  var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz               ";
  var text = "";
  for (var i = 0; i < 22; i++) {
      text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return text;
}

const loader = new THREE.FontLoader();

var tMesh;
const textYStart = 60;
const textFinPos = new THREE.Vector3(-90, 500, 0);

// var moby = document.getElementById("moby").innerText;
// const mobArray = moby.match(/.{26}/g)

var geometry;
var textMaterial = mats[Math.floor(Math.random() * 6)];
var font
const fontSize = 10
loader.load( 'assets/HankRnd Black_Regular.json', function ( font ) {
  this.font = font
	geometry = new THREE.TextGeometry( /*mobArray[0]*/genRandomText(), {
		font: font,
		size: fontSize,
		height: 1,
		curveSegments: 5,
		bevelEnabled: true,
		bevelThickness: .1,
		bevelSize: .1,
		bevelOffset: 0,
		bevelSegments: 5
	} );

  tMesh = new THREE.Mesh( geometry, textMaterial );
  tMesh.castShadow = true;
  tMesh.receiveShadow = true;
  tMesh.position.set(-90, textYStart, 0);
  scene.add(tMesh)
} );

var animCount = 0
const animText = () => {
  if (tMesh) {
    if (tMesh.position.y < 460) {
        tMesh.position.y += 2
    } else {
      tMesh.parent.remove(tMesh);
      tMesh.geometry.dispose();
      tMesh.material.dispose();
      // tMesh = undefined;

      geometry = new THREE.TextGeometry( /*mobArray[++animCount]*/genRandomText(), {
        font: font,
        size: fontSize,
        height: 1,
        curveSegments: 5,
        bevelEnabled: true,
        bevelThickness: .1,
        bevelSize: .1,
        bevelOffset: 0,
        bevelSegments: 5
      } );
  
      textMaterial = mats[Math.floor(Math.random() * 6)];
    
      tMesh = new THREE.Mesh( geometry, textMaterial );
      tMesh.castShadow = true;
      tMesh.receiveShadow = true;
      tMesh.position.set(-90, textYStart, 0);
      scene.add(tMesh)
    }
  }
  
  renderer.render(scene, camera);
  requestAnimationFrame(animText);
};

/*--------------------
random youtube link generation
--------------------*/
function getRandomQuery() {
  var codeLength = 2;
  var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var code = "";
  for (var i = 0; i < codeLength; i++) {
      code += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return code;
}
var vidID;
const tryVid = () => {
  const API_KEY = "AIzaSyBBPcW7x2lxQTzqwm1yPAYYhjLn8LI5LYo";
  const numVids = 25
  var qID = getRandomQuery();
  var url = "https://www.googleapis.com/youtube/v3/search?key=" + API_KEY + "&maxResults=" + numVids + "&part=snippet&type=video&q=" + qID;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    vidID = data.items[Math.floor(Math.random() * numVids)].id.videoId;
  });
}
tryVid()

/*--------------------
youtube iframe
--------------------*/

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('iframe', {
    height: '1080',
    width: '1920',
    frameborder: 0,
    videoId: vidID,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      //'onStateChange': onPlayerStateChange
    }
  });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.mute();
  //player.seekTo(145, true);
}
// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }
var youtubeFrame = () => {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var object = new THREE.CSS3DObject( document.getElementById("iframe") );
  //object.position.set( -3940, -2320, -12000 );
  object.position.set( -240, 160, 0 );
  object.scale.set(0.14, 0.14, 0.14);
  object.rotation.y = Math.PI * 0.3;
  return object;
}
//-------------------------------------------------------------------------------------------------------------------------
scene.add(youtubeFrame())
// setTimeout(() => {
//   scene.add(youtubeFrame());
// }, 500)

// var youtubeFrame = function ( id, x, y, z, ry ) {
//   var div = document.createElement( 'div' );
//   div.style.width = '1920px';
//   div.style.height = '1080px';
//   div.style.backgroundColor = '#000000';
//   var iframe = document.createElement( 'iframe' );
//   iframe.setAttribute("id", "iframe");
//   iframe.style.width = '1920px';
//   iframe.style.height = '1080px';
//   iframe.style.border = '0px';
//   iframe.src = [ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
//   div.appendChild( iframe );
//   var object = new THREE.CSS3DObject( div );
//   object.position.set( x, y, z );
//   object.rotation.y = ry;
//   return object;
// };

// //const container = document.getElementById( 'canvas' );


// const id = tryVid();
// camera.position.x = 800;
// camera.position.y = 700;
// camera.position.z = 2400;
// scene.add(new youtubeFrame(id, -3940, -2320, -12000, 0))

const render = () => {
    cssRenderer.render( scene, camera)
    renderer.render( scene, camera )
    animText()
}
render()