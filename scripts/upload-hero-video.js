const { put, del, list } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

async function uploadHeroVideo() {
  try {
    console.log('🎬 Starting hero video replacement...\n');

    // Video paths
    const newVideoPath = '/Users/node/.openclaw/media/inbound/file_8---a298b39a-5459-4cf7-b700-c2933ac6c3f0.mp4';
    const oldVideoUrl = 'https://uglt1ui3grpqnmsq.public.blob.vercel-storage.com/hero-loop.mp4';

    // Check if new video exists
    if (!fs.existsSync(newVideoPath)) {
      throw new Error(`Video file not found at: ${newVideoPath}`);
    }

    const stats = fs.statSync(newVideoPath);
    console.log(`📹 New video size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    // Read the video file
    console.log('\n📤 Uploading new video to Vercel Blob...');
    const videoBuffer = fs.readFileSync(newVideoPath);
    
    // Upload to Vercel Blob with a unique name first
    const timestamp = Date.now();
    const blob = await put(`hero-loop-${timestamp}.mp4`, videoBuffer, {
      access: 'public',
      addRandomSuffix: false,
    });

    console.log(`✅ Upload complete!`);
    console.log(`   New URL: ${blob.url}\n`);

    // Delete old video
    console.log('🗑️  Deleting old video from Vercel Blob...');
    try {
      await del(oldVideoUrl);
      console.log('✅ Old video deleted successfully\n');
    } catch (error) {
      console.log(`⚠️  Could not delete old video: ${error.message}\n`);
    }

    // Return the new URL
    return {
      success: true,
      newUrl: blob.url,
      oldUrl: oldVideoUrl,
    };

  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

// Run the upload
uploadHeroVideo()
  .then(result => {
    console.log('🎉 Video replacement complete!');
    console.log('   New URL:', result.newUrl);
    process.exit(0);
  })
  .catch(error => {
    console.error('Failed:', error);
    process.exit(1);
  });
