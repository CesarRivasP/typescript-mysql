"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (request, response) => {
    const query = `SELECT * FROM heroes`;
    mysql_1.default.executeQuery(query, (error, heroes) => {
        if (error) {
            response.status(400).json({
                ok: false,
                error
            });
        }
        else {
            response.json({
                ok: true,
                heroes
            });
        }
    });
});
router.get('/heroes/:id', (request, response) => {
    const id = request.params.id;
    const escapeID = mysql_1.default.instance.connection.escape(id);
    const query = `
    SELECT *
      FROM heroes
        WHERE id = ${escapeID}
  `;
    mysql_1.default.executeQuery(query, (error, heroes) => {
        if (error) {
            response.status(400).json({
                ok: false,
                error
            });
        }
        else {
            response.json({
                ok: true,
                heroes: heroes[0]
            });
        }
    });
});
exports.default = router;
// Router se define para indicarle a la app de express que rutas tiene implementadas en un momento determiando
