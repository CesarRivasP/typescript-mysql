import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';



const router = Router();

router.get('/heroes', (request: Request , response: Response) => {

  const query = `SELECT * FROM heroes`;

  MySQL.executeQuery(query, (error: any, heroes: Object[]) => {
    if(error){
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
  })
})

router.get('/heroes/:id', (request: Request , response: Response) => {
  const id = request.params.id;
  const escapeID = MySQL.instance.connection.escape(id)

  const query = `
    SELECT *
      FROM heroes
        WHERE id = ${escapeID}
  `;

  MySQL.executeQuery(query, (error: any, heroes: Object[]) => {
    if(error){
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
  })
})

export default router;

// Router se define para indicarle a la app de express que rutas tiene implementadas en un momento determiando
