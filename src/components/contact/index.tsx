import Button from "@/shared/Button";
import HeaderText from "@/shared/HeaderText";
import { SelectedItem } from "@/shared/types";
import {
	MapPinIcon,
	PhoneIcon,
	EnvelopeIcon,
	GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {
	setSelectedItem: (value: SelectedItem) => void;
};

type FormInputs = {
	name: string;
	mail: string;
	subject: string;
	message: string;
};

const Contact = ({ setSelectedItem }: Props) => {
	const {
		register,
		trigger,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			mail: "",
			subject: "",
			message: "",
		},
	});

	const handleClick = async (e: any) => {
		const isValid = await trigger();
		console.log(isValid);
		if (!isValid) {
			e.preventDefault();
		}
	};

	const onSubmit = (data: FormInputs) => {
		console.log(data);
	};

	const labelStyle = `text-[12px] text-gray-900 font-semibold`;
	const inputStyle = `w-full py-4 border-b border-gray-300 
	focus:outline-none text-[14px] bg-gray-100`;
	const buttonStyle = `rounded-md bg-lightBlue text-gray-50 py-[12px]
	 px-[16px] text-[11px] tracking-[3px] transition duration-300 hover:text-lightBlue hover:bg-gray-50 border border-lightBlue`;

	return (
		<motion.section
			className="mt-5 mx-auto w-5/6"
			id="contactus"
			onViewportEnter={() => setSelectedItem(SelectedItem.Contactus)}
		>
			<HeaderText text="Contact Us" />
			<div className="mt-5 flex flex-col md:flex-row md:justify-between md:items-center">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="md:basis-2/5 bg-lightBlue text-gray-50 p-14 order-2 md:order-1"
				>
					<h1 className="text-[28px] pb-2">Let's get in touch</h1>
					<p className="text-[14px] leading-[25px] text-gray-200 pb-8">
						We're open for any suggestion or just to have a chat.
					</p>
					<div className="flex gap-3">
						<MapPinIcon className="h-5 w-5" />
						<h2 className="text-[14px] leading-[25px]">
							Address: Kathmandu, Nepal
						</h2>
					</div>
					<div className="flex gap-3 py-10">
						<PhoneIcon className="h-5 w-5" />
						<h2 className="text-[14px] leading-[25px]">
							Phone: + 1234 5678 910
						</h2>
					</div>
					<div className="flex gap-3">
						<EnvelopeIcon className="h-5 w-5" />
						<h2 className="text-[14px] leading-[25px]">
							Email: info@fitness.com
						</h2>
					</div>
					<div className="flex gap-3 py-8">
						<GlobeEuropeAfricaIcon className="h-5 w-5" />
						<h2 className="text-[14px] leading-[25px]">Websit: fitness.com</h2>
					</div>
				</motion.div>
				<form
					// onSubmit={handleSubmit(onSubmit)}
					className="bg-gray-100 basis-3/5 py-10 h-full order-1 md:order-2"
					action="https://formsubmit.co/pramodmaharjan.online@gmail.com"
					method="POST"
					target="_blank"
				>
					<div className="mx-10 md:mt-0 mt-10 flex flex-col gap-10 ">
						<div className="md:flex grid gap-10">
							<div>
								<label htmlFor="" className={labelStyle}>
									FULL NAME
								</label>
								<div className="relative">
									<input
										placeholder="Name"
										className={inputStyle}
										{...register("name", { required: true, maxLength: 100 })}
									/>
									{errors.name && (
										<p className="mt-1 text-red-300 text-xs italic absolute bottom-0 left-0">
											{errors.name.type === "required" &&
												"This field is required."}
											{errors.name.type === "maxLength" &&
												"Max length is 100 character."}
										</p>
									)}
								</div>
							</div>
							<div>
								<label htmlFor="" className={labelStyle}>
									EMAIL ADDRESS
								</label>
								<div className="relative">
									<input
										{...register("mail", {
											required: true,
											pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										})}
										placeholder="Email"
										className={inputStyle}
									/>
									{errors.mail && (
										<p className="mt-1 text-red-300 text-xs italic absolute bottom-0 left-0">
											{errors.mail.type === "required" &&
												"This field is required."}
											{errors.mail.type === "pattern" &&
												"Invalid email address."}
										</p>
									)}
								</div>
							</div>
						</div>
						<div>
							<label htmlFor="" className={labelStyle}>
								SUBJECT
							</label>
							<div className="relative">
								<input
									{...register("subject", { required: true, maxLength: 200 })}
									placeholder="Subject"
									className={inputStyle}
								/>
								{errors.subject && (
									<p className="mt-1 text-red-300 text-xs italic absolute bottom-0 left-0">
										{errors.subject.type === "required" &&
											"This field is required."}
										{errors.subject.type === "maxLength" &&
											"Max length is 200 character."}
									</p>
								)}
							</div>
						</div>
						<div>
							<label htmlFor="" className={labelStyle}>
								MESSAGE
							</label>
							<div className="relative">
								<textarea
									{...register("message", { required: true, maxLength: 500 })}
									placeholder="Message"
									className={inputStyle}
								/>
								{errors.message && (
									<p className="mt-1 text-red-300 text-xs italic absolute bottom-2 left-0">
										{errors.message.type === "required" &&
											"This field is required."}
										{errors.message.type === "maxLength" &&
											"Max length is 500 character."}
									</p>
								)}
							</div>
						</div>
					</div>
					<div className="mt-6 ml-10">
						<button className={buttonStyle} type="submit" onClick={handleClick}>
							SEND MESSAGE
						</button>
					</div>
				</form>
			</div>
		</motion.section>
	);
};

export default Contact;
