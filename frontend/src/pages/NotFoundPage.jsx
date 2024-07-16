export function NotFoundPage() {
	return (
		<section>
			<div className=' text-white'>
				<div className='flex h-screen'>
					<div className='m-auto text-center'>
						<div>
							<img src='/404.svg' alt='404' />
						</div>
						<p className='text-sm md:text-base text-[#FFA500] p-2 mb-4'>
							The information {"you're"} seeking is not available at the moment.
						</p>

						<a
							href='/'
							className='bg-transparent hover:bg-[#FFD700] text-[#FFD700] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#FFD700] hover:border-transparent'

						>
							Take me home
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
