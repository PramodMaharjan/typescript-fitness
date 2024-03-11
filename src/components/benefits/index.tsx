import HeaderText from "@/shared/HeaderText";
import { BenefitType, SelectedItem } from "@/shared/types";
import {
	AcademicCapIcon,
	ClipboardDocumentCheckIcon,
	TrophyIcon,
} from "@heroicons/react/24/solid";
import BenefitDetail from "@/components/benefits/BenefitDetail";
import { motion } from "framer-motion";

type Props = {
	setSelectedItem: (value: SelectedItem) => void;
};

const benefitData: Array<BenefitType> = [
	{
		icon: <ClipboardDocumentCheckIcon />,
		title: "Diverse Classes",
		description:
			"Discover a diverse range of training classes at our gym, catering to all fitness levels and interests!",
	},
	{
		icon: <AcademicCapIcon />,
		title: "Pro Trainers",
		description:
			"Unlock your full potential with our elite team of pro trainers.",
	},
	{
		icon: <TrophyIcon />,
		title: "Quality Equipment",
		description:
			"Get fit with our high-quality gym equipment. Elevate your workout experience at [Gym Name].",
	},
];

const Benefit = ({ setSelectedItem }: Props) => {
	const text = "ALL ABOUT OUR GYM";
	return (
		<section className="py-10 mx-auto w-5/6" id="benefits">
			<motion.div
				onViewportEnter={() => setSelectedItem(SelectedItem.Benefits)}
			>
				<HeaderText text={text} />
				<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
					{benefitData.map((item: BenefitType, index: number) => (
						<BenefitDetail key={item.title} data={item} index={index} />
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Benefit;
