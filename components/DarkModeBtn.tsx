'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<li className="`w-full py-2 pl-3 pr-4 rounded md:bg-transparent flex items-end hover:underline md:p-0 dark:text-white">
			{currentTheme === 'dark' ? (
				<SunIcon
					className="h-5 w-5 cursor-pointer text-white"
					onClick={() => {
						setTheme('light');
					}}
				/>
			) : (
				<MoonIcon
					className="h-5 w-5 cursor-pointer"
					onClick={() => {
						setTheme('dark');
					}}
				/>
			)}
		</li>
	);
};
export default DarkModeBtn;
