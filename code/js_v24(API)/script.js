// let url = "https://jsonplaceholder.typicode.com/posts/",
// 	data = { userName: "example" };

// fetch(url, {
// 	method: "POST",
// 	body: JSON.stringify(data),
// 	headers: { "Content-Type": "application/json" },
// })
// 	.then((response) => response.json())
// 	.then((myJson) => console.log("Success", myJson))
// 	.catch((error) => console.error("Error", error));

export default class GotService {
	constructor() {
		this._apiBase = "https://www.anapioficeandfire.com/api";
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Cloud not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getAllcharacters() {
		return this.getResource("/characters?page=5&pageSize=10");
	}

	getCharacter(id) {
		return this.getResource(`/characters/${id}`);
	}
}
