const express=require('express');

const bodyParser=require('body-parser');

const app=express();


app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(__dirname + '/index.html'));


app.use(express.static(__dirname + '/public'));



app.get('/',function(request,response)
{
    response.sendFile(__dirname + "/index.html");
})



app.post("/",function(request,response)
{

    var num1=Number(request.body.num1);
    var num2=Number(request.body.num2);
    var num3=Number(request.body.num3);
    var num4=Number(request.body.num4);
    var num5=Number(request.body.num5);
    var num6=Number(request.body.num6);
    var num7=Number(request.body.num7);
    var num8=Number(request.body.num8);
    var num9=Number(request.body.num9);
    var num10=Number(request.body.num10);
    var num11=Number(request.body.num11);
    var num12=Number(request.body.num12);
    var num13=Number(request.body.num13);
    var num14=Number(request.body.num14);
    var num15=Number(request.body.num15);
    var num16=Number(request.body.num16);
    var num17=Number(request.body.num17);
    var num18=Number(request.body.num18);
    var num19=Number(request.body.num19);
    var num20=Number(request.body.num20);

    var result=(num1*num2 + num3*num4 + num5*num6 + num7*num8 + num9*num10 + num11*num12 + num13*num14 + num15*num16 + num17*num18 + num19*num20)/(num1 + num3 + num5 + num7 + num9 + num11 + num13 +num15 + num17 +num19);
    let finalresult=result.toFixed(2);
    response.send("Your CGPA  Is :  " + finalresult)

    
    
})



app.listen(4000,function()
{
    console.log("Server is Live on port 4000");
})