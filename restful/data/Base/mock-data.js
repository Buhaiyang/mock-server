module.exports = {
  "GET:/app": {
    "id": "test",
    "description": "this is a test!"
  },
  "POST:/app": (req, res)=>{
    res.status(201).send('success');
  },
  "PUT:/app/:id": (req, res)=>{
    res.send('ok');
  },
  "DELETE:/app": (req, res)=>{
    res.status(204).send('success');
  },
}
