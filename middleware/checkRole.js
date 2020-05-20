module.exports = {
  checkRoles,
};

function checkRoles(roles) {
  return function (req, res, next) {
    const role = req.jwt.role;

    if (req.jwt && req.jwt.role && roles.includes(role)) {
      next();
    } else {
      res.status(403).json({ you: "have no power here" });
    }
  };
}
