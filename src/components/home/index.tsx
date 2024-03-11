import Button from "@/shared/Button";
import { SelectedItem } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
	setSelectedItem: (value: SelectedItem) => void;
};

const Home = ({ setSelectedItem }: Props) => {
	return (
		<section
			id="home"
			className="mt-16 relative bg-background-image bg-no-repeat sm:bg-cover bg-contain h-screen"
		>
			<div className="mx-auto w-5/6">
				<motion.div
					className="absolute top-1/2 mt-0"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					onViewportEnter={() => setSelectedItem(SelectedItem.Home)}
				>
					<div className="text-lightBlue text-sm tracking-widest">
						<h2>WELCOME TO FITNESS</h2>
					</div>
					<div className="mt-2 text-gray-800 text-3xl max-w-2xl">
						<p>
							Strength begins in the mind. Train it, nourish it, and witness the
							results.
						</p>
					</div>
					<div className="mt-5 flex gap-2">
						<Button>LEARN MORE</Button>
						<Button setSelectedItem={setSelectedItem}>CONTACT US</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Home;
