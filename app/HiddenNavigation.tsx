'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export default function CollapseNavbar() {
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<>
			<button
				type="button"
				className="md:hidden btn-text text-gray-800"
				onClick={() => setShowNavbar(!showNavbar)}
			>
				<span className="sr-only">Open main menu</span>
				<Bars3Icon className="w-5 h-5 dark:text-white" />
			</button>
			<ul
				className={`${
					showNavbar ? 'w-full' : 'hidden'
				} md:hidden flex flex-col space-y-2 justify-center items-center py-2 pt-4 border-b`}
			>
				<NavItem label="Search" link="#" />
				<NavItem label="About" link="#" />
			</ul>
		</>
	);
}

export function NavItem({ label, link }: { label: string; link: string }) {
	return (
		<li>
			<Link
				href={link}
				className="w-full block py-2 pl-3 pr-4 rounded md:bg-transparent text-gray-900 md:p-0 dark:text-white"
			>
				{label}
			</Link>
		</li>
	);
}
