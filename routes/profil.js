const express = require("express");
const router = express.Router();
const verify = require("../middleware/verifyJWT");
const profilController = require("../controller/profil.controller");

// Create profil record
router.post("/", verify, profilController.createProfil);

// Get profil records for the user
router.get("/", verify, profilController.getProfil);

// Update profil record
router.patch("/:id", verify, profilController.updateProfil);

// Delete profil record
router.delete("/:id", verify, profilController.deleteProfil);

module.exports = router;
