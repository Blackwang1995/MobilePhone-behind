const express = require("express");
var pool = require("../pool");
var router = express.Router();

//banner下的10张图片获取
router.get("/list",(req,res)=>{
    var sql = "SELECT id,img_url,title,router_link FROM banner";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    });
});

module.exports = router;