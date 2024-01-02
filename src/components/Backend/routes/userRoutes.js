const router = require("express").Router();

const {
  createUser,
  deleteUser,
  getAllUser,
  getOneUser,
  updateUser,
} = require("../controllers/userController");

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getOneUser);
router.get("/", getAllUser);

module.exports = router;