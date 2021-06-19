const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg  = "sunrise1.png";

function preload() 
{
     getBackgroundImg()
}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw()
{
     if (backgroundImg)
     background(backgroundImg);

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg()
{
   var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();
   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);
   console.log(hour)
    if(hour > 00 && hour < 03)
    {
        bg = "sunrise1.png";
    }

    if(hour > 02 && hour < 05)
    {
        bg = "sunrise2.png";
    }

    if(hour > 04 && hour < 07)
    {
        bg = "sunrise3.png";
    }

    if(hour > 06 && hour < 09)
    {
        bg = "sunrise4.png";
    }

    if(hour > 08 && hour < 11)
    {
        bg = "sunrise5.png";
    }

    if(hour > 10 && hour < 13)
    {
        bg = "sunrise6.png";
    }

    if(hour > 12 && hour < 15 )
    {
        bg = "sunset7.png";
    }

    if(hour > 14 && hour < 17)
    {
        bg = "sunset8.png";
    }

    if(hour > 16 && hour < 19)
    {
        bg = "sunset9.png";
    }

    if(hour > 18 && hour < 21)
    {
        bg = "sunset10.png";
    }


    if(hour > 20 && hour < 23)
    {
        bg = "sunset11.png";
    }

    if(hour > 22 && hour < 01)
    {
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg)
    console.log(backgroundImg)
}
