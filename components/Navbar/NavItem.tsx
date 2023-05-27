'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({ label, link }: { label: string; link: string }) {
	const pathname = usePathname();
	return (
		<li>
			<Link
				href={link}
				className={`w-full block py-2 pl-3 pr-4 rounded md:bg-transparent hover:underline md:p-0 dark:text-white ${
					pathname === link
						? 'text-primary-500 underline'
						: 'text-gray-900'
				}`}
			>
				{label}
			</Link>
		</li>
	);
}
