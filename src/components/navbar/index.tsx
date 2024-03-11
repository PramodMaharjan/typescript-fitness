import useMediaQuery from "@/hooks/useMediaQuery";
import Navigate from "./Navigate";
import { NavbarItemType, SelectedItem } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@/shared/Button";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
	selectedItem: SelectedItem;
	setSelectedItem: (value: SelectedItem) => void;
	top: boolean;
};

const navbarItems: Array<NavbarItemType> = [
	{
		title: "Home",
	},
	{
		title: "Benefits",
	},
	{
		title: "Classes",
	},
	{
		title: "Contact Us",
	},
];

const Navbar = ({ selectedItem, setSelectedItem, top }: Props) => {
	const [isMenuToggle, setIsMenuToggle] = useState(false);
	const flex = "flex items-center justify-between";
	const mediaQuery = useMediaQuery("(min-width: 1060px)");
	const atTop = top ? "bg-gray-50" : "bg-gray-100";
	return (
		<>
			<div
				className={`${flex} fixed top-0 py-5 z-10 w-full drop-shadow ${atTop} bg-gray-100 z-20 text-[15px]`}
			>
				<div className={`${flex} w-5/6 mx-auto gap-20`}>
					<h1 className="font-bold text-blue text-xl">Fitness</h1>
					{mediaQuery ? (
						<div className={`${flex} w-full`}>
							<div className={`${flex} gap-10`}>
								{navbarItems.map((item: NavbarItemType) => (
									<div key={item.title}>
										<Navigate
											page={item.title}
											selectedItem={selectedItem}
											setSelectedItem={setSelectedItem}
										/>
									</div>
								))}
							</div>
							<div className={`${flex} gap-10`}>
								<Button>Sign In</Button>
								<Button>Become a Member</Button>
							</div>
						</div>
					) : (
						<button onClick={() => setIsMenuToggle((prevState) => !prevState)}>
							{isMenuToggle ? (
								<XMarkIcon className="h-6 w-6 text-gray-600 hover:text-gray-400" />
							) : (
								<Bars3Icon className="h-6 w-6 text-gray-600" />
							)}
						</button>
					)}
				</div>
			</div>
			{isMenuToggle && !mediaQuery && (
				<motion.nav
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3 }}
					className=" fixed right-0 bottom-0 w-[250px] h-full bg-gray-100  drop-shadow-lg z-10"
				>
					<div className={`mt-20 flex flex-col items-center gap-10 text-xl`}>
						{navbarItems.map((item: NavbarItemType) => (
							<div key={item.title}>
								<Navigate
									page={item.title}
									selectedItem={selectedItem}
									setSelectedItem={setSelectedItem}
								/>
							</div>
						))}
					</div>
				</motion.nav>
			)}
		</>
	);
};
export default Navbar;
