// hashnode.js
const API_KEY = 'YOUR_HASHNODE_API_KEY';
const API_URL = 'https://api.hashnode.com/';

export async function fetchHashnodeBlogs() {
  try {
    const response = await fetch(`${API_URL}v1/blog/${API_KEY}/posts`);

    if (!response.ok) {
      throw new Error('Error fetching Hashnode blogs');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Hashnode blogs:', error);
    return [];
  }
}
