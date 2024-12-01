"use client"

import { ReactNode } from 'react';
import { selectAuth } from '../redux/authSlice';
import { useSelector, useStore } from 'react-redux';
import initAuth from '../auth/initAuth';

export default function AuthProtectionProvider({
	children
}: {
	children: ReactNode;
}) {
	const authenicated = useSelector(selectAuth);

      if (!authenicated) {
            initAuth()
      }

	return <>{children}</>;
}
