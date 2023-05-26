export default function Loading() {
	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center space-y-4">
			<div>
				<span className="relative flex h-12 w-12">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
					{/* add logo in below span */}
					<span className="relative inline-flex rounded-full h-12 w-12 bg-sky-500"></span>
				</span>
			</div>
			<div className="text-xl font-semibold animate-wave-animation">
				Loading...
			</div>
		</div>
	);
}
