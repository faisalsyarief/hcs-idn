const express = require("express");
const router = express.Router();
const kntController = require("../controller/kntController");

/**
 * @swagger
 * /api/v1/kombinasiNomorTelepon:
 *   post:
 *     description: Diketahui input berupa string angka, output berupa semua kemungkinan pasangan huruf/angka dari inputan tersebut. 0-9. Apabila angka tidak ajaib, proses diatas akan terus berulang dan tidak akan mencapai hasil akhir 1.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomor:
 *                 type: string
 *                 example: "23"
 *     responses:
 *       200:
 *         description: Hasil Kombinasi Nomor Telepon
 *       400:
 *         description: Gagal Kombinasi Nomor Telepon
 */
router.post("/", kntController.kntController);

module.exports = router;