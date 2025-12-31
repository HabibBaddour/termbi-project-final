import fetch from "node-fetch";

export default async function handler(req, res) {
	const path = req.query.path.join("/");
	const url = `https://training.tamkeen-dev.com/termc/public/${path}`;

	try {
		const response = await fetch(url, {
			method: req.method,
			headers: {
				...req.headers,
				host: new URL(url).host,
			},
			body:
				req.method !== "GET" && req.method !== "HEAD"
					? req.body
					: undefined,
		});

		const data = await response.text();
		res.status(response.status).send(data);
	} catch (err) {
		res.status(500).send(err.message || "Server error");
	}
}
