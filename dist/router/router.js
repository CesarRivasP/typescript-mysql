"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/heroes', (request, response) => {
    response.json({
        ok: true,
        message: 'Todo esta bien'
    });
});
router.get('/heroes/:id', (request, response) => {
    const id = request.params.id;
    response.json({
        ok: true,
        message: 'Todo esta bien',
        id
    });
});
exports.default = router;
// Router se define para indicarle a la app de express que rutas tiene implementadas en un momento determiando
