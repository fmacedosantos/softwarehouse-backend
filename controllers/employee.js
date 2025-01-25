const { Employee, Position } = require('../models'); 

const findAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [Position]
        });
        return res.json(employees);
    } catch (error) {
        console.log({ erro: error });
        return res.status(500).json({ message: 'Erro ao recuperar todas os funcionários!' });
    }
}

const findOneEmployee = async (req, res) => {
    try {
        const id = req.params.id;

        const employee = await Employee.findOne({
            where: {
                id: id
            }
        });

        if (employee !== null) {
            return res.json(employee);
        } else {
            throw new Error('Funcionário não identificado!');
        }
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao recuperar o funcionário!' });
    }
}

const createEmployee = async (req, res) => {
    try {
        await Employee.create(req.body);
        return res.status(201).json({ message: 'Funcionário registrado com sucesso!' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao registrar funcionário!' });
    }
}

const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.update(req.body, {
            where: {
                id: id
            }
        });

        if (employee) {
            const newEmployee = await Employee.findOne({
                where: {
                    id: id
                }
            });

            return res.json(newEmployee);
        } else {
            throw new Error('Funcionário não identificado!');
        }
    } catch (error) {
        const message = error.message === 'Funcionário não identificado!' ? 'Funcionário não identificado!' : 'Erro ao atualizar funcionário!';
        return res.status(500).json({ message: message });
    }
}

const deleteEmployee = async (req, res) => { 
    try {
        const id = req.params.id;
        const employee = await Employee.destroy({
            where: {
                id: id
            }
        });

        if (employee) {
            return res.status(204).send();
        } else {
            throw new Error('Funcionário não identificado!');
        }
    } catch (error) {
        const message = error.message === 'Funcionário não identificado!' ? 'Funcionário não identificado!' : 'Erro ao deletar funcionário!';
        return res.status(500).json({ message: message });
    }
}

module.exports = {
    findAllEmployees,
    findOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}