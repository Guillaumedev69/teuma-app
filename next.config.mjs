import path from 'path';
import { fileURLToPath } from 'url';

// Remplace __dirname avec ce qui suit
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
