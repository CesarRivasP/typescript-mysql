import { Router, Request, Response } from 'express';



const router = Router();

router.get('/heroes', (request: Request , response: Response) => {
  response.json({
    ok: true,
    message: 'Todo esta bien'
  })
})

router.get('/heroes/:id', (request: Request , response: Response) => {
  const id = request.params.id;

  response.json({
    ok: true,
    message: 'Todo esta bien',
    id
  })
})

export default router;

// Router se define para indicarle a la app de express que rutas tiene implementadas en un momento determiando
