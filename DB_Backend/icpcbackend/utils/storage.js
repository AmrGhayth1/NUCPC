const supabase = require('../../config/supabaseclient');

// Download a file from Supabase Storage and return as UTF-8 string
async function getFileText(bucket, path) {
  const { data, error } = await supabase.storage.from(bucket).download(path);
  if (error) {
   console.error(`Failed to download file from ${bucket}/${path}:`, error.message);
throw new Error(`Download error: ${error.message}`);
  }

  const buffer = await data.arrayBuffer();
  return Buffer.from(buffer).toString('utf-8');
}

// Upload a file to the 'outputs' bucket
async function uploadOutput(path, content) {
  const { error } = await supabase.storage
    .from('outputs')
    .upload(path, Buffer.from(content), {
      contentType: 'text/plain',
      upsert: true,
    });

  if (error) {
    console.error('Upload output failed:', error.message);
    throw new Error('Upload failed: ' + error.message);
  }
}

// Get a public URL for a file in 'outputs' bucket
async function getOutputPublicUrl(path) {
  const { data, error } = supabase.storage
    .from('outputs')
    .getPublicUrl(path);

  if (error) {
    console.error('Get public URL error:', error.message);
    throw new Error('URL error: ' + error.message);
  }

  return data.publicUrl;
}

module.exports = { getFileText, uploadOutput, getOutputPublicUrl };
