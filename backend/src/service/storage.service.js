const imagekkit = require("@imagekit/nodejs")


const imagekit = new imagekkit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function upload(buffer) {
    console.log(buffer);
    const result =  await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : "image.jpg"
    })
    return result;
}

module.exports = upload