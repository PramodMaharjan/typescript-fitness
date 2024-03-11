export enum SelectedItem {
	Home = "home",
	Benefits = "benefits",
	Classes = "classes",
	Contactus = "contactus",
}

export type NavbarItemType = {
	title: string;
};

export type BenefitType = {
	icon: JSX.Element;
	title: string;
	description: string;
};

export type ClassesType = {
	icon: JSX.Element;
	title: string;
	description: string;
};
