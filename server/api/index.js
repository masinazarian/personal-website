import { Router } from 'express';

import tweets from './tweets';
import tags from './tags';
import mediumposts from './mediumposts';
import notebooks from './notebooks';

const router = Router();

router.use(tweets);
router.use(tags);
router.use(mediumposts);
router.use(notebooks);

export default router;
