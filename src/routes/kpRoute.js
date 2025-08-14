const express = require("express");
const router = express.Router();
const kpController = require("../controller/kpController");

/**
 * @swagger
 * /api/v1/kataPalindromik:
 *   post:
 *     description: Diketahui inputan berupa string, tugas kamu adalah mencari berapa banyak substring palindromik dari string tersebut. Kata Palindromik adalah kata yang di bolak balik memiliki susunan / pengucapan yang sama.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: aaa
 *     responses:
 *       200:
 *         description: Hasil palindromik
 *       400:
 *         description: Gagal palindromik
 */
router.post("/", kpController.kpController);

module.exports = router;