/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	concurrentFeatures: true,
	compiler: {
		styledComponents: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
