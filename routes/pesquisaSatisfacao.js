module.exports = (app, db, route) => {
	app.get(`/${route}/viaturas`, (req, res) => {
		try {
			db.ps_viaturas.findAll().then((result) => res.status(201).json(result))
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	})

	app.get(`/${route}/viaturas/:unid`, (req, res) => {
		try {
			db.ps_viaturas.findAll({ where: {unidade: req.params.unid} }).then((result) => res.status(201).json(result))
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	})

	app.get(`/${route}/unidades`, (req, res) => {
		try {
			db.ps_unidades.findAll().then((result) => res.status(201).json(result))
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	})

	app.get(`/${route}/:id`, (req, res) => {
		try {
			res.status(201).json("Selecao pelo ID");
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	})
}