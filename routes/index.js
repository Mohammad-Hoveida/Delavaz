var express = require('express');
var router = express.Router();
var internetAvailable = require('internet-available');
const file = require('fs');

// routes
router.get("/index",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        file.readFile('token.txt', 'utf8', (err, data) => {
            if (err) {
                res.send(err);
            }else{
                if(data=="false"){
                    res.render('index',{internetStatus:true});
                    file.writeFile('token.txt', "true", (err) => {
                        if (err) {
                          console.error('Error writing file:', err);
                        } else {
                          console.log('File written successfully!');
                        }
                      });
                }else{
                    res.render('main',{internetStatus:true});
                }
            }
        });
    }).catch(() => {
        console.log("No internet");
        file.readFile('token.txt', 'utf8', (err, data) => {
            if (err) {
                res.send(err);
            }else{
                if(data=="false"){
                    res.render('index',{internetStatus:false});
                    file.writeFile('token.txt', "true", (err) => {
                        if (err) {
                          console.error('Error writing file:', err);
                        } else {
                          console.log('File written successfully!');
                        }
                      });
                }else{
                    res.render('main',{internetStatus:false});
                }
            }
        });
    });
})

// index route
router.get("/",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('splash',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('splash',{internetStatus:false});
    });
})

router.get("/main.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('main',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('main',{internetStatus:false});
    });
})

router.get("/0.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('0',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('0',{internetStatus:false});
    });
})

router.get("/1.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('1',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('1',{internetStatus:false});
    });
})

router.get("/2.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('2',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('2',{internetStatus:false});
    });
})

router.get("/3.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('3',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('3',{internetStatus:false});
    });
})

router.get("/4.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('4',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('4',{internetStatus:false});
    });
})

router.get("/5.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('5',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('5',{internetStatus:false});
    });
})

router.get("/6.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('6',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('6',{internetStatus:false});
    });
})

router.get("/7.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('7',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('7',{internetStatus:false});
    });
})

router.get("/8.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('8',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('8',{internetStatus:false});
    });
})

router.get("/9.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('9',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('9',{internetStatus:false});
    });
})

router.get("/10.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('10',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('10',{internetStatus:false});
    });
})

router.get("/11.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('11',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('11',{internetStatus:false});
    });
})

router.get("/12.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('12',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('12',{internetStatus:false});
    });
})

router.get("/13.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('13',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('13',{internetStatus:false});
    });
})

router.get("/14.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('14',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('14',{internetStatus:false});
    });
})

router.get("/15.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('15',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('15',{internetStatus:false});
    });
})

router.get("/16.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('16',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('16',{internetStatus:false});
    });
})

router.get("/17.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('17',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('17',{internetStatus:false});
    });
})

router.get("/18.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('18',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('18',{internetStatus:false});
    });
})

router.get("/19.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('19',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('19',{internetStatus:false});
    });
})

router.get("/bio.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('bio',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('bio',{internetStatus:false});
    });
})

router.get("/aboutus.jade",(req,res)=>{
    internetAvailable({
        domainName: "google.com",
        port: 53,
        host: '8.8.8.8'
    }).then(() => {
        console.log("Internet available");
        res.render('aboutus',{internetStatus:true});
       
    }).catch(() => {
        console.log("No internet");
        res.render('aboutus',{internetStatus:false});
    });
})

// export
module.exports = router;
