const { User } = require('../models')
const bcrypt = require('bcrypt')
const auth = require('../utils/auth')

const login = async (req, res) => {

    try {
        
        const { username, password } = req.body

        const user = await User.findOne({ 
            where: { 
                username
             }
         })

         if (!user) {
            throw new Error('Usuário ou senha inválidos!')
        }

        const isValidPassword = bcrypt.compareSync(password, user.password)

        if (!isValidPassword) {
            throw new Error('Usuário ou senha inválidos!')
        }

        const token = auth.generateToken(user.username, user.role)
        
        return res.status(200).send({ token })
    } catch (error) {
        
        return res.status(500).json({ message: error.message })
    }
}

const createUser = async (req, res) => {
    
    try {
        
        const { username, password } = req.body

        const passwordHash = bcrypt.hashSync(password, 8)

        await User.create({ 
            username, 
            password: passwordHash 
        })

        return res.status(201).send()
    } catch (error) {

        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: 'Usuário já cadastrado!' })
        }
        
        return res.status(500).json({ message: error.message })
    }
}

module.exports ={
    login,
    createUser
}