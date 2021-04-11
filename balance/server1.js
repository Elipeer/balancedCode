const exp = require('express');

  const app2 = exp()
  const port = process.env.PORT || 5500;
  const path = require('path')

  app2.use(exp.static(path.join(__dirname, 'build')));

  app2.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app2.listen(port, _ => {
    console.log(`server started on port ${port}`)
  })
