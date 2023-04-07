// const characters = require("./utils/data");
const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;

http
	.createServer((req, res) => {
		console.log(`Server raised in port ${PORT}`);
		res.setHeader("Access-Control-Allow-Origin", "*"); 
		const { url } = req;
		if (url.includes("/rickandmorty/character/")) {
			const id = url.split("/").pop();
			// console.log(id);
			// res.end(id)
			getCharById(res, id);
			// // let idFounded = characters.find((character) => character.id === Number(characterId));
			// if (!idFounded) {
			// 	res.writeHead(404, { "Content-Type": "text/plain" }).end("not found");
			// }
			// // console.log(`Debug: ${idFounded.name}`);
			// res
			// 	.writeHead(202, { "Content-Type": "application/json" })
			// 	.end(JSON.stringify(idFounded));
		}
	})
	.listen(PORT, "localhost");
