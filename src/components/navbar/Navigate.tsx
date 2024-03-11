import { SelectedItem } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	page: string;
	selectedItem: SelectedItem;
	setSelectedItem: (value: SelectedItem) => void;
};

const Navigate = ({ page, selectedItem, setSelectedItem }: Props) => {
	const toLowerCase = page.toLowerCase().replace(/\s/g, "") as SelectedItem;
	return (
		<div>
			<AnchorLink
				href={`#${toLowerCase}`}
				className={`${selectedItem === toLowerCase ? "text-lightBlue" : " hover:text-lightBlue transition duration-300 ease-in-out"}`}
				onClick={() => setSelectedItem(toLowerCase)}
				offset="100"
			>
				{page}
			</AnchorLink>
		</div>
	);
};

export default Navigate;

