const express = require('express');
const bodyPar = require('body-parser');
const date = require(__dirname+"/date.js")
const app =express();
const items =["Buy Food","Cook Food", "Eat Food"];
let workItem =[];
app.use(bodyPar.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.use(express.static('public'));
app.listen(3000, function(){
  console.log("Running on Port 3000");
})
app.get("/", function(req, res){
  // var today = new Date();
  // var options = {
  //   weekday : "long",
  //   day : "numeric",
  //   month : "long",
  //   year : "numeric"
  // };
  // var day = today.toLocaleDateString("hi-IN", options);
  let day = date.getdate();
  console.log(day);
  res.render("list", {ListTitle: day,  AddnewItem: items})
});


app.get("/work", function(req, res){
  res.render("list", {ListTitle : "Work List", AddnewItem: workItem});
})

app.post("/", function(req, res){

  var item = req.body.inp;
  if(req.body.list == 'Work List'){
     workItem.push(item);
     res.redirect("/work")
  }else{
    items.push(item);
    res.redirect("/");
  }

})

app.get("/about", function(req, res){
  res.render("about")
})
