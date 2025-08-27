import jwt from "jsonwebtoken";

/**
 * Generates a JSON Web Token to be used as an authorization token.
 * @param {Object} user - The user object to be encoded in the token.
 * @returns {string} The generated token.
 */
export default function GenerateToken(user) {
    return jwt.sign(user , process.env.ACCESS_TOKEN, { expiresIn: '1h' });
}
//require('crypto').randomBytes(64).toString('hex')