const GridBg = ({ children }) => {
	return (
		<div className='w-full bg-gray-900 text-white  relative'>{/*bg-grid-white/[0.2] */}
			<div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
			{children}
		</div>
	);
};
export default GridBg;