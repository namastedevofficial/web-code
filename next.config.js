/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['i.ytimg.com'],
	},
	eslint: {
		dirs: [
			'pages',
			'utils',
			'components',
			'context',
			'services',
			'hooks',
			'interfaces',
		],
	},
}

module.exports = nextConfig
