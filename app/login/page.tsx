import Button from '@/components/Buttons';
import { ButtonType } from '@/components/schemas/Button';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function LoginPage() {
	return (
		<>
			{/* main container */}
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				{/* website name */}
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<Link href={'/'}>
						<div className="flex flex-col space-y-2 items-center">
							<BuildingLibraryIcon className="mx-auto h-10 w-auto dark:text-white" />
							<div className="text-2xl font-semibold whitespace-nowrap dark:text-white">
								OpenLibrary
							</div>
						</div>
						<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
							Log in to your account
						</h2>
					</Link>
				</div>

				{/* form container */}
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label htmlFor="email" className="input-label">
								Email address
							</label>
							<div className="mt-2">
								<input
									name="email"
									type="email"
									autoComplete="email"
									required
									className="input-field invalid:input-field"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="input-label"
								>
									Password
								</label>
								<div className="text-sm">
									<Link
										href="#"
										className="font-semibold text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400"
									>
										Forgot password?
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<input
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="input-field invalid:input-field"
								/>
							</div>
						</div>

						<div>
							<Button
								type="submit"
								label="Log in"
								className="w-full"
							/>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Don&apos;t have a account?{' '}
						<Link
							href="/signup"
							className="font-medium leading-6 text-primary-600 hover:underline dark:text-primary-500"
						>
							Sign up now
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
