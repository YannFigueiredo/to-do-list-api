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
}

export default new TaskMiddleware()