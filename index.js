const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(1024, 1024, 'png')
const ctx = canvas.getContext('2d')
 
loadImage('atlas-ao.png').then((image) => {
  for (let x = 0 ; x < 4; x++) {
    for (let y = 0 ; y < 4; y++) {

      let sx = x * 256 + 64
      let sy = y * 256 + 64
      let sWidth = 128
      let sHeight = 128

      for (let i = 0 ; i < 2; i++) {
        for (let j = 0 ; j < 2; j++) {
          let dWidth = 128
          let dHeight = 128
          let dx = x * 256 + i * 128
          let dy = y * 256 + j * 128

          // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
          ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        }
      }
    }
  }

  fs.writeFileSync('out.png', canvas.toBuffer())
})
