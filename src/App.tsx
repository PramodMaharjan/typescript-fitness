import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SelectedItem } from "@/shared/types";
import Home from "@/components/home";
import Benefit from "@/components/benefits";
import Classes from "@/components/classes";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
	const [selectedItem, setSelectedItem] = useState<SelectedItem>(
		SelectedItem.Home
	);
	const [top, setTop] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setTop(true);
				setSelectedItem(SelectedItem.Home);
			} else {
				setTop(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="app">
			<Navbar
				selectedItem={selectedItem}
				setSelectedItem={setSelectedItem}
				top={top}
			/>
			<Home setSelectedItem={setSelectedItem} />
			<Benefit setSelectedItem={setSelectedItem} />
			<Classes setSelectedItem={setSelectedItem} />
			<Contact setSelectedItem={setSelectedItem} />
			<Footer setSelectedItem={setSelectedItem} />
		</div>
	);
}

export default App;
