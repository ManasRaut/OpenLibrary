import Image from 'next/image';
import {
	ArrowRightIcon,
	BuildingLibraryIcon,
	MagnifyingGlassIcon,
	PencilIcon,
} from '@heroicons/react/24/outline';
import heroimg from '@/media/hero.png';
import Button from '@/components/Buttons';
import { ButtonType } from '@/components/schemas/Button';
import CollapseNavbar, { NavItem } from '@/app/HiddenNavigation';

export default function Home() {
	return (
		<>
			{/* Simple navbar, only to be used in landing page */}
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
					{/* Logo and website name */}
					<a
						href="http://localhost:3000"
						className="flex items-end space-x-2"
					>
						<BuildingLibraryIcon className="w-10 h-10" />
						<span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
							OpenLibrary
						</span>
					</a>

					{/* nav items */}
					<div className="hidden w-full md:flex md:w-auto items-center justify-center space-x-8">
						<div>
							<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								<NavItem label="Search" link="#" />
								<NavItem label="About" link="#" />
							</ul>
						</div>
						<div className="flex space-x-2 justify-center items-center">
							<Button
								btnType={ButtonType.Outlined}
								label={'Login'}
							/>
							<Button
								btnType={ButtonType.Normal}
								label={'Sign up'}
							/>
						</div>
					</div>
					{/* Menu button */}
					<CollapseNavbar />
				</div>
			</nav>

			<main className="w-full min-h-screen">
				{/* hero container */}
				<div className="w-full flex flex-col md:flex-row-reverse p-4 md:my-[4px] max-auto md:justify-center items-center">
					<div className="w-full md:w-[50%] flex justify-center">
						<Image
							src={heroimg}
							className="my-8 w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
							alt="Hero image"
						/>
					</div>
					<div className="flex flex-col md:items-center justify-center">
						<div className="w-full lg:w-[60%] md:w-[80%] text-6xl font-semibold">
							Create, Share, Search, Learn.
						</div>
						<div className="my-6 md:w-[60%] ">
							<Button
								label={'Get Started'}
								trailingIcon={
									<ArrowRightIcon className="w-5 h-5" />
								}
							/>
						</div>
					</div>
				</div>

				<div className="mr-auto ml-auto my-4 w-full lg:max-w-[80%] p-4 flex flex-col justify-center">
					<div className="text-4xl font-semibold p-2">
						Notes and docs
					</div>
					<div className="p-2">
						Simple. Powerful. Beautiful. Document your knowledge
						easily using powerful document editing features.
					</div>
					<div className="py-2">
						<Button
							btnType={ButtonType.Outlined}
							label={'Start writing'}
							trailingIcon={<PencilIcon className="w-5 h-5" />}
						/>
					</div>
				</div>

				<div className="mr-auto ml-auto my-4 w-full lg:max-w-[80%] p-4 flex flex-col lg:items-end justify-center">
					<div className="text-4xl font-semibold p-2">Learn</div>
					<div className="p-2">
						Search for any topics you want to learn. Make use of
						notes written by others to increase your knowledge
					</div>
					<div className="py-2">
						<Button
							btnType={ButtonType.Outlined}
							label={'Search document'}
							trailingIcon={
								<MagnifyingGlassIcon className="w-5 h-5" />
							}
						/>
					</div>
				</div>

				<div className="h-10" />
			</main>
			<footer className="flex flex-col md:flex-row w-full border-t border-gray-200 justify-around items-center text-gray-500 py-4 bg-gray-100">
				<div className="flex space-x-2 items-cemter">
					<BuildingLibraryIcon className="w-5 h-5" />
					<span className="text-xl font-semibold whitespace-nowrap">
						OpenLibrary
					</span>
				</div>
				Keep learning and Keep sharing.
			</footer>
		</>
	);
}
