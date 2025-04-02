import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/main`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/callback`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.2
		}
	];
}

