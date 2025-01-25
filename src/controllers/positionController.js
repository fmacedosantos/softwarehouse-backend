const { Position } = require('../models'); 

const findAllPositions = async (req, res) => {

    try {

        const positions = await Position.findAll();

        return res.json(positions);
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
}

const findOnePosition = async (req, res) => {

    try {
        
        const id = req.params.id;

        const position = await Position.findOne({
            where: {
                id: id
            }
        });

        if (position !== null) {

            return res.json(position);
        } else {

            throw new Error('Posição não identificada!');
        }
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
}

const createPosition = async (req, res) => {

    try {

        await Position.create(req.body);

        return res.status(201).json({ message: 'Posição registrada com sucesso!' });
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
}

const updatePosition = async (req, res) => {

    try {

        const id = req.params.id;
        
        const position = await Position.update(req.body, {
            where: {
                id: id
            }
        });

        if (position) {
            const newPosition = await Position.findOne({
                where: {
                    id: id
                }
            });

            return res.json(newPosition);
        } else {

            throw new Error('Posição não identificada!');
        }
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
}

const deletePosition = async (req, res) => { 

    try {

        const id = req.params.id;

        const position = await Position.destroy({
            where: {
                id: id
            }
        });

        if (position) {

            return res.status(204).send();
        } else {

            throw new Error('Posição não identificada!');
        }
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    findAllPositions,
    findOnePosition,
    createPosition,
    updatePosition,
    deletePosition
}