import Button from "@/shared/Button";
import { BenefitType } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
	data: BenefitType;
	index: number;
};

const BenefitDetail = ({ data, index }: Props) => {
	return (
		<motion.div
			className="text-center border rounded-md shadow-md p-4"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.2 }}
		>
			<div className="flex justify-center">
				<div className="text-lightBlue h-8 w-8">{data.icon}</div>
			</div>
			<h4 className="py-5 text-gray-900 text-lg">{data.title}</h4>
			<p className="text-sm">{data.description}</p>
			<div className="pt-5">
				<Button>LEARN MORE</Button>
			</div>
		</motion.div>
	);
};

export default BenefitDetail;
