'use client';

import { QueryStatus } from '@reduxjs/toolkit/query';
import { redirect } from 'next/navigation';

export default async function onSuccess() {
	redirect('/main');
}
