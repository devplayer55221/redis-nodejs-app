module.exports = app => {

	app.post("/loginuser", (req, res) => {
		console.log("In controller");
		console.log(req.body);
	});

};
