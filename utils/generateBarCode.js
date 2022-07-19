const bwipjs = require('bwip-js');

async function generateBarCode(data, type = 'code128') {
  try {
    const result = await bwipjs.toBuffer({
      bcid: type, // Barcode type
      text: data, // Text to encode
      scale: 1, // 3x scaling factor
      height: type === 'qrcode' ? 512 : 200, // Bar height, in millimeters
      width: 512, // Bar width, in millimeters
      includetext: false, // Show human-readable text
      textxalign: 'center', // Always good to set this
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { generateBarCode };
