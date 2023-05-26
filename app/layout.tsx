import Providers from './Providers';
import './styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'OpenLibrary - Learn and share',
	description:
		'Document your knowledge easily and make it available to everyone.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} w-full h-full bg-white dark:bg-gray-900 dark:text-white duration-300 transition-colors ease-in`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
