export interface Artist {
	artistId: number;
	name: string;
	age: number;
	genres: Genre[];
	gender: string;
	isAlive: boolean;
	decade: number;
	wonGrammy: boolean;
}

export interface Genre {
	id: number;
	name: string;
}

export const fetchArtists = async () => {
	try {
		const response = await fetch("http://localhost:8080/api/artists");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (e) {
		console.error("Error fetching artists:", e); // Log detailed error for debugging
	}
};
