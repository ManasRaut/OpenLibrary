import Navbar from '@/components/Navbar/Navbar';

export default function UserPagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const navMenu = [
		{
			label: 'Home',
			link: '/home',
		},
		{
			label: 'Search',
			link: '/search',
		},
		{
			label: 'Help',
			link: '/help',
		},
	];

	return (
		<section>
			<Navbar menu={navMenu} />
			{children}
		</section>
	);
}
