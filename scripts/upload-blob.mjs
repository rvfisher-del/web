import { put } from '@vercel/blob';
import { readFile } from 'fs/promises';

const BLOB_TOKEN = 'vercel_blob_rw_uGlt1UI3GrpQNMsQ_jPpifu2VURDLRrPhPGobFdAl27b3Za';

async function uploadToBlob() {
  try {
    console.log('📹 Reading video file...');
    const videoPath = process.env.HOME + '/Downloads/Cinematic_Renewable_Energy_Site_Loop.mp4';
    const videoBuffer = await readFile(videoPath);
    
    console.log('☁️  Uploading to Vercel Blob...');
    console.log(`   File size: ${(videoBuffer.length / 1024 / 1024).toFixed(2)}MB`);
    
    const blob = await put('hero-loop.mp4', videoBuffer, {
      access: 'public',
      contentType: 'video/mp4',
      token: BLOB_TOKEN,
      addRandomSuffix: false,
    });

    console.log('\n✅ Upload successful!');
    console.log('Blob URL:', blob.url);
    console.log('\n🎬 Use this URL in CinematicHero.tsx:');
    console.log(`<source src="${blob.url}" type="video/mp4" />`);
    
    return blob.url;
  } catch (error) {
    console.error('\n❌ Error:', error);
    throw error;
  }
}

uploadToBlob()
  .then(url => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Upload failed:', err.message);
    process.exit(1);
  });
