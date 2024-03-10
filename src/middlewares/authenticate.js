const error = require("../messagesWarnings/errorsMessage");
const { isValidToken } = require("../Services/JWT");
async function isAuthenticated(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null)
      return res.status(401).json({ err: error.jwt.notFound });

    const isValid = isValidToken(authHeader);
    if (!isValid || req.session.data === undefined)
      return res.status(401).json({ err: error.notAuthenticated });
    next();
  } catch (err) {
    return res.status(500).json({ err: error.ServerError });
  }
}

module.exports = isAuthenticated;