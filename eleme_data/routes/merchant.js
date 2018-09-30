const express = require("express");

const pool = require("../pool");

var router = express.Router();

router.get("/list",(req,res)=>{
    var id = req.query.id;
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    if(!pno){
        pno=1
    }
    if(!pageSize){
        pageSize=4
    }
    var sql="SELECT id,img_url,title,sale,dispatching,pingfen,type,peisong,distance,time,zhuansong,pinpai,sid FROM merchant LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    });
});

module.exports = router;