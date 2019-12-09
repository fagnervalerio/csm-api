module.exports = (app, db, route) => {
	app.get(`/${route}/viaturas`, (req, res) => {
		try {
			db.ps_viaturas.findAll({
				include: [
					{
						model: db.ps_questionarios_viaturas,
						include: [
							{
								model: db.ps_questionarios,
							}
						]
					}
				]
			}).then((result) => res.status(201).json(result))
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	})

	app.get(`/${route}/viaturas/:unid`, (req, res) => {
		try {
			let dtAtual = new Date();

			db.ps_viaturas.findAll({
				where: {
					unidade: req.params.unid
				},
				include: [
					{
						model: db.ps_questionarios_viaturas,
						include: [
							{
								model: db.ps_questionarios,
								where: {
									data_inicio: {
										[db.Sequelize.Op.lte]: dtAtual
									},
									data_termino: {
										[db.Sequelize.Op.gte]: dtAtual
									},
								}
							}
						]
					}
				]
			}).then((result) => res.status(201).json(result))
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

	app.get(`/${route}/questoes/:id`, (req, res) => {
		try {
			db.ps_questionarios_perguntas.findAll({
				where: {
					questionario_id: req.params.id
				},
				order: [
					['ordem', 'asc']
				],
				include: [
					{
						model: db.ps_perguntas,						
						include: [
							{
								model: db.ps_tipo_perguntas,
							},
							{
								model: db.ps_perguntas_respostas,
								order: [db.ps_perguntas_respostas, 'ordem', 'desc'],
								include: [
									{
										model: db.ps_respostas
									}
								]
							}
						]
					}
				]
			}).then((result) => res.status(201).json(result))
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