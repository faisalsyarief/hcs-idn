require('dotenv').config({ quiet: true });
const express = require("express");
const app = express();

const { swaggerUi, specs } = require("./swagger");
const { VALIDATION_FAILED } = require("./src/constants/globalConstant");
const loggerMiddleware = require("./src/middlewares/logsMiddleware.js");
const catchError = require("./src/middlewares/catchError.js");
const responseMiddleware = require("./src/middlewares/responseMiddleware.js");

const port = process.env.PORT || 3000;
const apiVersion = process.env.APIVERSION || "v1";
const endPoint = `/api/${apiVersion}`;

const jpt = require("./src/routes/jptRoute");
const kp = require("./src/routes/kpRoute");
const knt = require("./src/routes/kntRoute");

app.use(responseMiddleware);
app.use(express.json());
app.use(express.text());
app.use(loggerMiddleware);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
console.log(`Swagger UI available at http://localhost:${port}/api-docs`);

app.use((err, req, res, next) => {
    if (err.status && err.errors) {
        return res.sendError({
            message: VALIDATION_FAILED,
            rc: err.status,
            data: err.errors,
        });
    }
    next(err);
});

app.use(endPoint + "/jumlahPasanganTerkecil", jpt);
app.use(endPoint + "/kataPalindromik", kp);
app.use(endPoint + "/kombinasiNomorTelepon", knt);

app.use(catchError);
app.use((err, req, res, next) => {
    res.sendError(err);
});

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});