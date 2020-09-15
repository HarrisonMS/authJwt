const router = require("express").Router();

const Users = require("./model");
const restricted = require("../auth/restrictedMid");
const { isValid } = require("./services");
const { checkRoles } = require("../middleware/checkRole");

router.use(restricted);
//can also be written in line like the check role bellow

router.get("/", checkRoles("admin"), (req, res) => {
  Users.find()
    .then((users) => {
      res.json({ users: users, token: req.jwt });
    })
    .catch((err) => res.send(err));
});

//im the below
router.post("/", checkRoles(["admin"]), (req, res) => {
  const user = req.body;

  if (isValid(user)) {
    Users.add(user)
      .then((saved) => {
        res.status(201).json({ data: saved });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({ message: "please provide all user information" });
  }
});

router.delete("/:id", checkRoles(["admin"]), (req, res) => {
  const { id } = req.params;
  Users.remove(id).then((count) => {
    res.status(200).json(`you just deleted ${count} user mourn them`);
  });
});
module.exports = router;
