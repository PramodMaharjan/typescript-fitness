import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedItem } from "./types";

type Props = {
	children: React.ReactNode;
	setSelectedItem: (value: SelectedItem) => void;
};

const Button = ({ children, setSelectedItem }: Props) => {
	return (
		<AnchorLink
			className="border border-solid border-lightBlue p-2 rounded-md text-lightBlue hover:bg-lightBlue hover:text-gray-50 transition duration-500 ease-in-out"
			onClick={() => setSelectedItem(SelectedItem.Contactus)}
			href={`#${SelectedItem.Contactus}`}
			offset="100"
		>
			{children}
		</AnchorLink>
	);
};

export default Button;
