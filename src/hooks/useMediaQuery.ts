import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
	const [isMatching, setIsMatching] = useState(false);
	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== isMatching) {
			setIsMatching(media.matches);
		}
		window.addEventListener("resize", () => setIsMatching(media.matches));
		return () =>
			window.removeEventListener("resize", () => setIsMatching(media.matches));
	}, [isMatching, query]);
	return isMatching;
};

export default useMediaQuery;
