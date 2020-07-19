import { Router } from 'express';

import { Hashtags } from '../../models';

import { db } from '../../models/db';

import axios from 'axios';

const router = Router();
const fs = require('fs');

router.get('/notebooks', async (req, res, next) => {

  //let tags = await db.query(`select distinct tag from hashtags where tag !='TIL'`, { raw: true });
  fs.readdir('./static', (err, files) => {
    files = files.filter(x => x.slice(-5) === '.html');
    res.json({ notebooks: files.map(x => x.replace(/_/g, ' ').slice(0,-5)) });
  });

});

export default router;
