//27.01.25

//                                                MIDDLEWARE IN T.E


// const express = require("express")
// const http = require("http")
// const path = require("path")

// const app = express()

// app.use(express.static(path.join(__dirname,"public")))   //middleware - to make "public" folder as static

// app.get("/home",(req,res)=>{
//     res.sendFile(path.join(__dirname,"views","index.html"))
// })

// app.listen(3000,()=>{console.log("running in server");})





//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// //                                                               AFTER INSTALLING PUG PACKAGE

// const express = require("express")
// const http = require("http")
// const path = require("path")

// const app = express()

// app.use(express.static(path.join(__dirname,"public")))   //middleware - to make "public" folder as static

// app.set("view engine","pug")   //to set 'view engine' as 'pug'


// //needed for content to be displayed after navigating

// // app.get("/home",(req,res)=>{
// //     res.render("index")     //to render pug file | default extension - .pug
// // })


// // app.get("/about",(req,res)=>{
// //     res.render("about")
// // })


// app.get("/contact",(req,res)=>{
//     res.render("contact")
// })




// app.get("/home",(req,res)=>{

//     let  data = "test value"
//     res.render("index",{data})     //  2nd - optional obj para
// })


// app.get("/about",(req,res)=>{
//     let array=[1,2,3,4,5]
//     res.render("about",{array})
// })



// app.listen(3000,()=>{console.log("running in server");})



//---------------------------------------------------------------------------------------------------------------------------------------------


// //                                                               AFTER INSTALLING EJS PACKAGE

// const express = require("express")
// const http = require("http")
// const path = require("path")

// const app = express()

// app.use(express.static(path.join(__dirname,"public")))   //middleware - to make "public" folder as static

// app.set("view engine","ejs")   //to set 'view engine' as 'ejs'


// //needed for content to be displayed after navigating


// app.get("/contact",(req,res)=>{
//     res.render("contact")
// })


// app.get("/home",(req,res)=>{

//     let  data = "test value"
//     let array=[1,2,3,4,5]
//     res.render("index",{data,array})     //  2nd - optional obj para
// })


// app.get("/about",(req,res)=>{
//     let array=[1,2,3,4,5]
//     res.render("about",{array})
// })



// app.listen(3000,()=>{console.log("running in server");})



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------


//                                                               AFTER INSTALLING HANDLEBARS PACKAGE

const express = require("express")
const http = require("http")
const path = require("path")
const {engine} = require("express-handlebars")   //named export so ,{}

const app = express()

app.use(express.static(path.join(__dirname,"public")))   //middleware - to make "public" folder as static

app.set("view engine","hbs")   //to set 'view engine' as 'ejs'


//needed for content to be displayed after navigating


app.get("/contact",(req,res)=>{
    res.render("contact")
})


app.get("/home",(req,res)=>{

    let  data = "test value"
    let array=[1,2,3,4,5]
    res.render("index",{data,array})     //  2nd - optional obj para
})


app.get("/about",(req,res)=>{
    let array=[1,2,3,4,5]
    res.render("about",{array})
})



//NEW METHOD FROM 'express' module
app.engine("hbs",engine({extname:"hbs",defaultLayout:false}))   //to create user defined extension - 'hbs' | defaultLayout:false - to avoid error 


app.listen(3000,()=>{console.log("running in server");})