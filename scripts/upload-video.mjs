import { put } from '@vercel/blob';
import { readFile, writeFile } from 'fs/promises';

async function uploadVideo() {
  try {
    console.log('Reading video file...');
    const videoBuffer = await readFile('./public/videos/hero-loop.mp4');
    
    console.log('Uploading to Vercel Blob...');
    const blob = await put('hero-loop.mp4', videoBuffer, {
      access: 'public',
      contentType: 'video/mp4',
    });

    console.log('\n✅ Video uploaded successfully!');
    console.log('Blob URL:', blob.url);
    console.log('\nUpdate CinematicHero.tsx with this URL:');
    console.log(`<source src="${blob.url}" type="video/mp4" />`);
    
    // Save the URL for easy reference
    await writeFile('.env.local', `NEXT_PUBLIC_HERO_VIDEO_URL=${blob.url}\n`, { flag: 'a' });
    console.log('\n✅ URL saved to .env.local');
    
  } catch (error) {
    console.error('❌ Error uploading video:', error);
    process.exit(1);
  }
}

uploadVideo();
