import { SelectedItem } from "@/shared/types";
import { motion } from "framer-motion";
import { ClassesType } from "@/shared/types";
import ClassesDetail from "./ClassesDetail";
import WeighLifting from "@/assets/Weight.png";
import Boxing from "@/assets/Boxing.png";
import Crossfit from "@/assets/Crossfit.png";
import Yoga from "@/assets/Yoga.png";
import HeaderText from "@/shared/HeaderText";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

type Props = {
	setSelectedItem: (value: SelectedItem) => void;
};

const classesData: Array<ClassesType> = [
	{
		icon: <img src={WeighLifting} alt="Weight Lifting" />,
		title: "Weight Lifting",
		description:
			"It involves using resistance to challenge muscles for strength, growth, and endurance.",
	},
	{
		icon: <img src={Boxing} alt="Boxing" />,
		title: "Boxing",
		description:
			"It's a full-body workout focusing on punches, footwork, and defense, improving cardiovascular health, agility, strength, and mental discipline.",
	},
	{
		icon: <img src={Crossfit} alt="Crossfit" />,
		title: "CrossFit",
		description:
			"Combines elements of strength training, HIIT, and functional movements into a high-intensity workout regimen.",
	},
	{
		icon: <img src={Yoga} alt="Crossfit" />,
		title: "Yoga",
		description:
			"Holistic practice focuses on physical postures, breathing exercises, and meditation. It promotes flexibility, strength, relaxation, and overall well-being.",
	},
];

const Classes = ({ setSelectedItem }: Props) => {
	const arrowRef = useRef<HTMLDivElement>(null);
	const arrow = `absolute top-[60%] h-6 w-6 text-gray-900
	 z-10 cursor-pointer `;

	const handleArrow = (dir: "left" | "right") => {
		const current = arrowRef.current as HTMLDivElement;
		let scrollAmount: number;
		if (dir === "left") {
			scrollAmount = current.scrollLeft - current.offsetWidth;
		} else {
			scrollAmount = current.scrollLeft + current.offsetWidth;
		}
		current.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<section id="classes" className="w-full bg-gray-100">
			<motion.div
				onViewportEnter={() => setSelectedItem(SelectedItem.Classes)}
				className="py-5 mx-auto w-5/6 relative"
			>
				<HeaderText text="Classes" />
				<div className="mt-5 text-md">
					<p>
						Classes offer structured workouts in a group setting, typically led
						by a certified fitness instructor. These classes cater to various
						fitness levels and interests, encompassing a wide range of
						activities such as cardio, strength training, flexibility, and
						mindfulness exercises.
					</p>
				</div>
				<ArrowLeftIcon
					className={`hidden md:block ${arrow} md:-left-10 `}
					onClick={() => handleArrow("left")}
				/>
				<ArrowRightIcon
					className={`hidden md:block ${arrow} md:-right-10 hidden`}
					onClick={() => handleArrow("right")}
				/>
				<div
					className="mt-5 grid grid-cols-1 md:flex md:overflow-hidden gap-6"
					ref={arrowRef}
				>
					{classesData.map((item, index) => (
						<ClassesDetail key={item.title} data={item} index={index} />
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Classes;
