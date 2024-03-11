type Props = {
	text: string;
};

const HeaderText = ({ text }: Props) => {
	return (
		<div className="text-gray-800 text-3xl font-bold">
			<h2>{text}</h2>
		</div>
	);
};

export default HeaderText;
