var express = require('express');
var router = express.Router();
const { exec } = require('child_process');

router.post('/', function(req, res) {
  source = req.body.source;
  console.log(source);
  source = source.replace(/\n/g, "\\n");
  exec('echo "' + source + '" | python quinifier.py', (error, stdout, stderr) => {
    if (error) {
      console.error("Error: " + error);
      return;
    }
    res.send(stdout);
  });
});

module.exports = router;
