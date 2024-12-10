'use client';

import { selectUser, selectUserOutcoming } from '@/app/lib/redux/userSlice';
import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function Profile() {
	const { username } = useSelector(selectUser);
	const { avatarUrl } = useSelector(selectUserOutcoming);

	return (
		<section className='flex gap-4 items-center'>
			<h3 className='text-white'>{username}</h3>
			
			<img src={avatarUrl} className='w-9 h-9 rounded-full' alt={`${username}'s avatar`} />
		</section>
	);
}

/*

remotePatterns: [{
      protocol: 'https',
      hostname: 's3.us-east-2.amazonaws.com',
      port: '',
      pathname: '/assets/**'
    }]


    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-eu-central-1.amazonaws.com",
        port: "",
        pathname: "/mycompany-data-bucket-dev/**",
      },
    ],


*/
