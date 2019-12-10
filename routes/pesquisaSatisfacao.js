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
			}).then((data) => res.status(201).json(data))
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

	app.post(`/${route}/responder`, (req, res) => {
		try {
			console.log(req.body);
			let resposta = req.body;
			// Salva as resposta enviadas
			for(let pergunta_id of Object.keys(resposta.respostas)) {
				db.ps_questionarios_perguntas_respostas.create({
					questionario_id: resposta.questionario_id,
					viatura_id: resposta.viatura_id,
					pergunta_id: pergunta_id,
					funcao: resposta.funcao,
					unidade: resposta.unidade,
					email: resposta.email,
					data_resposta: new Date(),
					resposta_id: (resposta.respostas[pergunta_id].tipo != 'TEXTO') ? resposta.respostas[pergunta_id].valor : 0,
					resposta_texto: (resposta.respostas[pergunta_id].tipo == 'TEXTO') ? resposta.respostas[pergunta_id].valor : '',
				});
			}
			res.status(201).json(1);
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	})

	app.get(`/${route}/respondidas/:email/:unidade/:funcao`, (req, res) => {
		try {
			let sql = `select distinct c.*, date(a.data_resposta) data_resposta, a.email, a.unidade opm, a.funcao
						from ps_questionarios_perguntas_respostas a
						join ps_viaturas c on a.viatura_id = c.id
						where a.email = '${req.params.email}' and a.unidade = '${req.params.unidade}' and a.funcao = '${req.params.funcao}'`;
			db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT}).then(data => {
				// We don't need spread here, since only the results will be returned for select queries
				res.status(201).json(data);
  			})
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	})
}