const express = require("express");
const router = express.Router();
const jptController = require("../controller/jptController");

/**
 * @swagger
 * /api/v1/jumlahPasanganTerkecil:
 *   post:
 *     description: Diketahui input berisi array dengan panjang genap dan berisi angka (diurutkan terlebih dahulu). Buatlah grup dari angka-angka tersebut menjadi berpasangan seperti (a1,b1), (a2,b2),...(an,bn) yang membuat jumlah dari angka terkecil pasangan-pasangan tersebut (ai,bi) untuk semua i dari 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: integer
 *             example: [1,4,3,2]
 *     responses:
 *       200:
 *         description: Hasil perhitungan
 *       400:
 *         description: Gagal perhitungan
 */
router.post("/", jptController.jptController);

module.exports = router;