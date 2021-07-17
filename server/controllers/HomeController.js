class HomeController {
	static showHomePage(req, res) {
		res.send("Blog is running")
	}
}

module.exports = HomeController;