/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"gray-50": "#FFFFFF",
				"gray-100": "#F8F9FD",
				"gray-400": "#B3B3B3",
				"gray-500": "#6c757d",
				"gray-600": "#808080",
				"gray-700": "#4D4D4D",
				"gray-800": "#131719",
				"gray-900": "#000000",
				blue: "#006FDC",
				lightBlue: "#1089FF",
				green: "#A7CD54",
			},
			backgroundImage: {
				"background-image": "url('./assets/Background.webp')",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			screens: { xs: "480px", sm: "768px", md: "1060px" },
		},
	},
	plugins: [],
};
