import { Router } from 'express';

import { MediumPosts } from '../../models';

import { Sequelize } from '../../models/db';

import { APIKEY } from '../../assets/config';
import axios from 'axios';

const router = Router();

router.get('/mediumposts', async (req, res, next) => {
  let currentPosts = await MediumPosts.findAll({});
  res.json({posts: currentPosts});
});

router.get('/mediumpost/:id', async (req, res, next) => {
  let post = await MediumPosts.findOne({ where: { id: req.params.id }});
  res.json({post});
});

router.get('/collatemediumposts', async (req, res, next) => {

  let currentPosts = await MediumPosts.findAll({});
  res.json({posts: currentPosts});

  let latest = await axios.get('https://medium.com/@masinazarian/latest?format=json');
  latest = latest.data.replace("])}while(1);</x>", '');
  latest = JSON.parse(latest).payload;
  let items = latest.streamItems.reduce((acc, x) => {
    if (x.postPreview) {
      acc.push(x.postPreview.postId);
    }
    return acc;
  }, []);
  let queries = [];
  for (let post of items) {
    queries.push(axios.get(`https://medium.com/@masinazarian/${post}?format=json`));
  }
  let posts = await Promise.all(queries);
  for (let post of posts) {
    post = post.data.replace("])}while(1);</x>", '');
    post = JSON.parse(post).payload.value;
    let existing = await MediumPosts.findOne({
      attributes: ['id'],
      where: {
        id: post.id,
      },
    });
    if (!existing) {
      MediumPosts.create({
        id: post.id,
        content: post.content,
        title: post.title,
        uniqueSlug: post.uniqueSlug,
        createdAt: post.createdAt,
        mediumUrl: post.mediumUrl,
        virtuals: post.virtuals,
        totalClapCount: post.virtuals.totalClapCount,
        wordCount: post.virtuals.wordCount,
        tags: post.virtuals.tags,
      });
    } else {
      let pst = await MediumPosts.findOne({ where:
        { id: post.id }
      });
      pst.set({
        virtuals: post.virtuals,
        totalClapCount: post.virtuals.totalClapCount,
      }).save();
    }

  }

});

export default router;
