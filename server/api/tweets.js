import { Router } from 'express';

import { Tweets, Hashtags } from '../../models';

import { Sequelize } from '../../models/db';

import { APIKEY } from '../../assets/config';
import axios from 'axios';

const router = Router();

router.get('/fullTweet/:id', async (req, res, next) => {
  let tweet = await Tweets.findOne({
    where: {
      id: parseInt(req.params.id),
    },
  });
  console.log(tweet);
  res.json(tweet);
});

router.get('/tagged/:tag', async (req, res, next) => {
  console.log(req.params);
  let matching = await Tweets.findAll({
    where: {
      hashtags: {
        [Sequelize.Op.like]: '%' + req.params.tag + '%',
      },
    },
  });
  return res.json(matching);
});

router.get('/tweets', async (req, res, next) => {
  let headers = {
    "Authorization": `Bearer ${APIKEY}`,
    "Accept": "*",
  };
  let currentTweets = await Tweets.findAll({});
  res.json({tweets: currentTweets});

  let resp = await axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=from:masinazarian#TIL`, {headers});
  let tweets = resp.data.statuses;
  let ids = resp.data.statuses.map(x => x.id);
  let existing = await Tweets.findAll({
    attributes: ['id'],
    where: {
      id: {
        [Sequelize.Op.in]: ids,
      },
    },
  });
  let existingIds = existing.map(x => x.id);
  for (const tweet of tweets) {
    if (!existingIds.includes(tweet.id)) {
      let hashtags = tweet.entities.hashtags.map(x => x.text);
      for (const tag of hashtags) {
        Hashtags.create({
          tag,
          appearsIn: tweet.id,
        });
      }
      Tweets.create({
        id: tweet.id,
        text: tweet.text,
        hashtags: JSON.stringify(hashtags),
        createdAt: new Date(tweet.created_at),
      });
    }
  }
});

export default router;
