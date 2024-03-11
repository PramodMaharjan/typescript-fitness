import { ClassesType } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
	data: ClassesType;
	index: number;
};

const ClassesDetail = ({ data, index }: Props) => {
	const overlay = `absolute border-none rounded-md 
	bg-lightBlue opacity-0 md:h-[350px] md:w-[355px]
	flex-col justify-center text-center text-gray-50
	hover:opacity-90 hover:cursor-pointer transition duration-500`;

	return (
		<motion.div
			className="text-center border rounded-md shadow-md md:h-[350px] md:w-[355px] md:relative md:flex-shrink-0 p-4 md:p-0"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.2 }}
		>
			<div className={`hidden md:flex ${overlay}`}>
				<div className="py-5 text-2xl font-bold">{data.title}</div>
				<div className="text-sm">{data.description}</div>
			</div>
			<div className="flex flex-col justify-center items-center h-full w-full">
				<div className="md:h-24 md:w-24 h-14 w-14">{data.icon}</div>
				<div className="py-5 text-gray-900 text-xl">{data.title}</div>
				<div className="md:hidden text-sm">{data.description}</div>
			</div>
		</motion.div>
	);
};

export default ClassesDetail;
