const express = require("express");

const router = express.Router();

const userService = require(
  "../services/user.service"
);

const authMiddleware = require(
  "../middleware/auth.middleware"
);

router.get(
  "/",
  authMiddleware,
  (req, res) => {
    res.json(
      userService.listUsers()
    );
  }
);

router.post(
  "/",
  async (req, res) => {
    try {
      const user =
        await userService.createUser(
          req.body
        );

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
    }
  }
);

module.exports = router;