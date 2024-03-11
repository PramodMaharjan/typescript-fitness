import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
	const contactStyle = `text-[15px] leading-[25px] font-[500] text-gray-700`;
	return (
		<section className="mt-10 bg-gray-800 md:p-20 p-8">
			<div className="md:flex md:justify-center items-center gap-10">
				<div className="md:w-[60%]">
					<h3 className="text-[18px] text-gray-300 pb-6">About</h3>
					<p className="text-[15px] font-[500] text-gray-700">
						Discover fitness and community at our gym! With expert coaching,
						top-notch equipment, and a welcoming atmosphere, we're here to
						support your journey to a healthier you. Join us today and thrive!
					</p>
				</div>
				<div className="md:mt-0 mt-10">
					<h3 className="text-[18px] text-gray-300 pb-6">Contact Info</h3>
					<div className="flex gap-3">
						<MapPinIcon className="h-5 w-5" />
						<h2 className={contactStyle}>Address: Kathmandu Nepal</h2>
					</div>
					<div className="flex gap-3 py-10">
						<PhoneIcon className="h-5 w-5" />
						<h2 className={contactStyle}>Phone: + 1234 5678 910</h2>
					</div>
					<div className="flex gap-3">
						<EnvelopeIcon className="h-5 w-5" />
						<h2 className={contactStyle}>Email: info@fitness.com</h2>
					</div>
				</div>
			</div>
			<div className="mt-10 flex justify-center items-center">
				<h3 className={contactStyle}>Copyright ©2024 All rights reserved</h3>
			</div>
		</section>
	);
};

export default Footer;
