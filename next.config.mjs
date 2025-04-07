/** @type {import('next').NextConfig} */
const nextConfig = {
    // next.config.js
    env: {
      API_URL: process.env.NODE_ENV === 'production' 
        ? 'https://your-express-app.onrender.com' 
        : 'http://localhost:7000'
    }
};

export default nextConfig;
