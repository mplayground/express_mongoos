var express = require('express');
var router = express.Router();

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play');

var Teachers = require('../app/models/teachers');

router.route('/')

  .get(function(req, res) {

      Teachers.find(function(err, teachers) {
        if (err)
          res.send(err);

          res.json(teachers);
      });
  })  // 세미콜론 붙이면 오류가 난다.

  .post(function(req, res) {

      var teachers = new Teachers();

      teachers.name = req.body.name;
      teachers.email = req.body.email;
      teachers.password = req.body.password;
      teachers.status = req.body.status;
      teachers.overview = req.body.overview;
      teachers.profileImage = req.body.profileImage;

      teachers.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'teachers created!' });
      });
  })

router.route('/:teacher_id')

  .get(function(req, res) {
      Teachers.findById(req.params.teacher_id, function(err, teachers) {
          if (err)
              res.send(err);
          res.json(teachers);
      });
  })

  .put(function(req, res) {

      Teachers.findById(req.params.teacher_id, function(err, teachers) {

          if (err)
              res.send(err);

          teachers.name = req.body.name;

          teachers.save(function(err) {
              if (err)
                  res.send(err);

              res.json({ message: 'teachers updated!' });
          });

      });
  })

  .delete(function(req, res) {

      Teachers.remove({
          _id: req.params.teacher_id
      }, function(err, bear) {
          if (err)
              res.send(err);

          res.json({ message: 'Successfully deleted' });
      });
  });


module.exports = router;
