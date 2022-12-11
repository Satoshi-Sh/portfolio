require('dotenv').config()
const cloudinary = require('cloudinary').v2


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure:true 
  });
export default function upload(path){
  const ID = path.split('/')[-1].split('.')[0]
  cloudinary.v2.uploader.upload(path,
  { public_id: ID }, 
  function(error, result) {
    if (error){
      throw error
    }
    console.log(result);
    return result.secure_url });
}
  // cloudinary.v2.uploader.upload("./src/images/languages/Python.svg",
  // { public_id: "python" }, 
  // function(error, result) {console.log(result); });