class TaskMiddleware {
    validateTitle(req, res, next) {
        if(req.body.title === undefined) {
            return res.status(400).json({errorMsg: "A propriedade 'título' é obrigatória"})
        }
            
        if(req.body.title === "") {
            return res.status(400).json({errorMsg: "A propriedade 'título' não pode ser vazia"})
        }
        
        next()
    }

    validateStatus(req, res, next) {
        if(
            req.body.status !== "a fazer" && 
            req.body.status !== "em andamento" && 
            req.body.status !== "feito" &&
            req.body.status !== undefined
        ) {
            const msg = "A propriedade 'status' pode ter somente os valores: 'a fazer', 'em andamento' ou 'feito'"

            return res.status(400).json({errorMsg: msg})
        }

        next()
    }
}

export default new TaskMiddleware()