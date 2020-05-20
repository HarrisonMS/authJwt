const router = require("express").Router();
const authRouter = require("../auth/router");
const usersRouter = require("../users/router");

router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.get("/", (req, res) => {
  res.json({ api: "You figured it out!" });
});

module.exports = router;
