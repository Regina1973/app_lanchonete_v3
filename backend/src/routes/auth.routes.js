const express = require("express");
const router = express.Router();

const authService = require("../services/auth.service");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(
      email,
      password
    );

    res.json(result);
  } catch (error) {
    res.status(401).json({
      error: error.message
    });
  }
});

module.exports = router;