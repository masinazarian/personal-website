import { Router } from 'express';

import { Hashtags } from '../../models';

import { db } from '../../models/db';

import axios from 'axios';

const router = Router();

router.get('/tags', async (req, res, next) => {

  let tags = await db.query(`select distinct tag from hashtags where tag !='TIL'`, { raw: true });
  res.json({ tags: tags[0] });

});

export default router;
