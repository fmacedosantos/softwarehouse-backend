function checkRoles(requiredRoles) {
    return (req, res, next) => {
        const userRoles = req.user.role;

        const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));

        if (!hasRequiredRole) {
            return res.status(403).json({ message: 'Acesso negado: você não tem permissão para realizar esta operação.' });
        }

        next();
    };
}

module.exports = checkRoles;