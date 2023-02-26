const express = require('express')
const app=express()
app.set('view engine','ejs')
app.use(express.static('public'))


let studentes=[
    {
        name:'Mru',
        age:20,
        schools:'mmdmrs',
        imgs:'./images/6.jpeg'

    },
    {
        name:'Mru',
        age:20,
        schools:'mmdmrs',
        imgs:'./images/6.jpeg'
    },
    {
        name:'Mru',
        age:20,
        schools:'mmdmrs',
        imgs:'./images/6.jpeg'
    }    

]


app.get('/',(req,res)=>{
    console.log("Responce fro the server");
    // res.send("Hellow");
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about',{studentes})
})
app.get('/about-us',(req,res)=>{
    res.redirect('./about');
})


app.listen(3000,()=>{
    console.log("3000 port sending the requst")
})