import Joi from "joi";

export async function validateRegister(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(4).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required(),
    });
    
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function validateLogin(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required(),
    });
    
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(417).json({ error: error.message });
    }
}