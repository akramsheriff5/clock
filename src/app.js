const express=require('express')
const path=require('path')
const app=express()
const host=process.env.PORT||2000
// path set pana html file ku
const pathway=path.join(__dirname,'../public')



// hbs concept set pana
app.set('view engine','hbs')

//  express la html use pana
 app.use(express.static(pathway))

 app.get('',(req,res)=>{
     res.render('index',{
         title:"clock",
         credits:"Akram"
     })
 })
 app.get('/stopwatch',(req,res)=>{
    res.render('stopwatch',{
        title:"StopWatch",
        credits:"Akram"
    })
})
app.get('/timer',(req,res)=>{
    res.render('timer',{
        title:"Timer",
        credits:"Akram"
    })
})
 app.listen(host,()=>{
     console.log('server is up')
 })