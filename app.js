const path=require('path');
const express=require('express');
const bodyparser=require('body-parser');
const static_path=path.join(__dirname,'./public');
console.log(path.join(__dirname,"./public"));
const cors=require('cors');
const sequelize=require('./model/database');
const User=require('./model/user');

const app=express();
app.use(cors());
app.use(express.static(static_path));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/get-users',(req,res)=>{
    //res.send("hello");
    console.log('test');
    User.findAll().then(users=>{
        res.send(users)
    }).catch(err=>{
        console.log(err);
        res.json(err)
    })
})

app.post('/add-users',(req,res)=>{
    console.log('inside adduser')
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    User.create({
        name: name,
        age: age,
        email: email
    }).then(() => {
        console.log("user added");
        res.status(201).send({
            data: "user created",
            user: {
                        name: name, age: age, email: email
                    }
        })
    })
})



sequelize.sync().then(result=>{
    // console.log(result);
     app.listen(8000,()=>{
       console.log('work properly');
     });
 })
 .catch(err=>{
     console.log(err);
 });


