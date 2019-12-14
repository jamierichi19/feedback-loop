const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST route to add a new review to the DB 
// body expected with feeling, understanding, support & comments
router.post('/', (req, res) => {
    const newReview = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
        VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [newReview.feeling, newReview.understanding, newReview.support, newReview.comments])
      .then((result) => {
        console.log(`Added review to the database`, newReview);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      })
  })




module.exports = router;