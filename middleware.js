const jwt = require('jsonwebtoken');
const secreKey = 'glowlistrahasia';

const authJWT = (res, res, next) => {
    const token = req.header('Authorization');

    if (token) {
        const auth = token.split(' ')[1];
        jwt.verify(auth, secreKey, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Tokentidak valis' });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: 'Silakan login terlebih dahulu' })
    }
};

module.exports =authJWT;