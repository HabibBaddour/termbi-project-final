// import fetch from "node-fetch";

// export default async function handler(req, res) {
// 	const pathArray = req.query.path || [];
// 	const path = pathArray.join("/");
// 	const url = `https://training.tamkeen-dev.com/termc/public/${path}`;

// 	try {
// 		const options = {
// 			method: req.method,
// 			headers: { ...req.headers },
// 		};

// 		if (req.method !== "GET" && req.method !== "HEAD") {
// 			const chunks = [];
// 			for await (const chunk of req) chunks.push(chunk);
// 			options.body = Buffer.concat(chunks);
// 		}

// 		const response = await fetch(url, options);
// 		const data = await response.text();
// 		res.status(response.status).send(data);
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).send(err.message || "Server error");
// 	}
// }
