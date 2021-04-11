const exp = require('express');
const knex = require('knex');
var cors = require('cors')

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'cooleli80',
    database: 'balanced'
  }})

const app = exp();
app.use(cors())
app.use(exp.json())

function createUser({fname,lname,email,username,password}){

    return db('users').insert(
      {
        username:username,
        password:password,
        email: email,
        first_name: fname,
        last_name: lname,
       }
    )
    .returning('*')
  }


app.post('/user',(req,res)=>{
  console.log(req.body);
  createUser(req.body)
  .then(data => {
    console.log(data)
    res.send({message:'OK', auth:true})
  })
  .catch(err => {
    res.send({message:err.detail, auth:false})
  })
})


app.get('/show', (req,res)=>{ß
  db('users')
  .select('username')
  .then(data => {
    console.log(data);
    res.send(data)
  })
  .catch(err => {
    console.log(err);
    res.send({message:err.detail})
  })
})

app.post('/find', (req,res)=>{
  console.log(req.body);
  const {username,password} = req.body;
  db('users')
  .select('password','username')
  .where({username:username})
  .then(data => {
    console.log(data);
    if(data.length>0){
      if(password == data[0].password){
        res.send({message:`Welcome ${data[0].username}`})
      }
      else{
        res.send({message:'Wrong password'})
      }
    }
    else {
      res.send({message:'Not Found'})
    }
  })
  .catch(err => {
    console.log(err);
    res.send({message:err.detail})
  })
})



app.listen(4000, () => console.log('API is running on http://localhost:4000/login'));
