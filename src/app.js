const express=require('express')
const path=require('path')
const hbs=require('hbs')


const pathway=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../template/views')
const partialspath=path.join(__dirname,'../template/partials')

const app=express()
const host=process.env.PORT||2000
// setup handelbar engine and view location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialspath)
// setup static directory to serve
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
     console.log('server is up'+host)
 })