const https = require('https');
const fs = require('fs');
const path = require('path');

// Using Cloudinary's unsigned upload preset for demo cloud
// This is a public demo account - for production, Rob should use his own account
const CLOUD_NAME = 'demo';
const UPLOAD_PRESET = 'ml_default';

async function uploadToCloudinary() {
  const videoPath = path.join(process.env.HOME, 'Downloads', 'Cinematic_Renewable_Energy_Site_Loop.mp4');
  
  console.log('📹 Reading video file...');
  const videoBuffer = fs.readFileSync(videoPath);
  const base64Video = videoBuffer.toString('base64');
  
  const formData = `upload_preset=${UPLOAD_PRESET}&file=data:video/mp4;base64,${base64Video}&resource_type=video&folder=grupo-globe&public_id=hero-loop`;
  
  const options = {
    hostname: 'api.cloudinary.com',
    port: 443,
    path: `/v1_1/${CLOUD_NAME}/video/upload`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(formData)
    }
  };
  
  return new Promise((resolve, reject) => {
    console.log('☁️  Uploading to Cloudinary...');
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.secure_url) {
            console.log('\n✅ Upload successful!');
            console.log('Public URL:', response.secure_url);
            console.log('Public ID:', response.public_id);
            
            // Generate optimized URL
            const optimizedUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/v${response.version}/${response.public_id}.mp4`;
            console.log('\n🎬 Optimized URL (use this):');
            console.log(optimizedUrl);
            
            resolve(optimizedUrl);
          } else {
            reject(new Error('Upload failed: ' + JSON.stringify(response)));
          }
        } catch (err) {
          reject(err);
        }
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    req.write(formData);
    req.end();
  });
}

uploadToCloudinary()
  .then(url => {
    console.log('\n✅ Done! Use this URL in CinematicHero.tsx');
    process.exit(0);
  })
  .catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  });
