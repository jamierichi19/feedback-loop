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
  });

// GET route to select all feedback items 
router.get('/', (req, res) => {
  // Find all feedbacks and return them
  pool.query('SELECT * FROM "feedback";').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /feedback', error);
      res.sendStatus(500);  
  });
});

// DELETE route to delete the specific row of feedback
router.delete('/:id', (req, res) => {
  let reqId = req.params.id;
  console.log('Delete request for id', reqId);
  let sqlText = 'DELETE FROM feedback WHERE id=$1;';
  pool.query(sqlText, [reqId])
      .then((result) => {
          console.log('feedback deleted');
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})

  




module.exports = router;