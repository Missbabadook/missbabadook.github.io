
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;
var myButton1;
var myButton2;
var myButton3;
var next;
var fog;
var fadeAmount = 1;
let numBalls = 100;
let spring = 0.05;
let gravity = .05;
let friction = -1;
let balls = [];
let dirt = 90;
let darkness = 0;

let click1;


//////ALEX CODE///////
////////////////////////////// 1 /////////////////
function intro()  {




    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
darkness = 0;
fog = 0;

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;
        loy = 100;
        background("red");
  snd6A.pause();
        //send off stage






        // if (snd5A.isPlaying()) {
        // // .isPlaying() returns a boolean
        //     snd1A.pause(); // .play() will resume from .pause() position
        // //  background(255, 0, 0);
        // } else {
        //     snd5A.play();
        //   //background(0, 255, 0);
        // }


    }


    this.draw = function()  {
        //background(0,0,255-loy);
        image(img6A,0,0,width,height);

        textFont(titlefont);

        textSize(300);
        fill(0,100);
        text("Siren Hill", width/2 - 310,height/2 - 10);
        fill(255,0,0);
        text("Siren Hill", width/2 - 300,height/2);

        textAlign(CENTER);
        textSize(29);
         fill(200,0,0);
         next = new Clickable(0,0);     //Create button
         next.color = "#000000";
         next.locate(width - 210, height-110);        //Position Button
         next.width = 200;
         next.height = 100;
         next.textColor = "#ff0000";
         next.textSize = 100;
         next.textFont = titlefont;
         next.text = "Next";

         next.onPress = function(){  //When myButton is pressed
           this.color = "#AAAAFF";
           snd2A.play();   //Change button color
mgr.showNextScene();
                //Show an alert message
         }

 next.draw();

         myButton = new Clickable(0,0);     //Create button
         myButton.locate(width/2 - 250, height-200);        //Position Button
         myButton.width = 500;
         myButton.height = 100;
         myButton.textSize = 50;
         myButton.text = "Info";
         myButton.onPress = function(){  //When myButton is pressed
           this.color = "#AAAAFF";       //Change button color

           alert("Welcome to the game! You are a maid tasked with cleaning a house on Siren Hill. Click the next button to start the job! Good luck! Press H to go to the help screen");                //Show an alert message
         }
 myButton.draw();


        drawSprites();  //used to show any sprites on the stage

    }


}
/////////////////////// 2 (main) ////////////////////////
function main()  {


  this.setup = function() {

    dirt = 90;
      background(0);
      console.log("We are at setup for scene2");
      for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(  random(width), random(height), random(5, 10), i,balls);
  }
      //octo1 = new Octopi(width/2-100,height/2-100,color(0,0,0),.20);
  }

  this.enter = function()
  {

      image(img2A,0,0,width,height);


      console.log("We are at scene2 (again?)");
    //  snd2A.loop();
    //send off stage



    //// the sounds also play
      if (snd2A.isPlaying()) {
      // .isPlaying() returns a boolean
          snd2A.pause(); // .play() will resume from .pause() position
      //  background(255, 0, 0);
      } else {
          snd2A.play();
        //background(0, 255, 0);
      }


  }

    this.draw = function()
    {

      image(img2A,0,0,width,height);
         background(101,62,4,dirt);

      noStroke();
      fill(255,25);
      ellipse(mouseX,mouseY,150,150);
      ellipse(mouseX,mouseY,300,300);
    strokeWeight(5);
      stroke(10);
      fill(255);
      rect(width/2-300, height-200, 600,100, 10);
      fill(0);
      strokeWeight(1);
      textSize(24);

      text("You enter the house. A large dark and dusty old place.", width/2-290, height - 175);
      text(" Well, better get to cleaning.", width/2 - 290, height - 150);
      text("{hold left click and drag to start scrubbin!}", width/2 - 290, height - 125);
if (mousePressed){

  noStroke();
  fill(200,200,255,dirt+50);
balls.forEach(ball => {
ball.collide();
ball.move();
ball.display();

});
}
next = new Clickable(0,0);     //Create button
   next.color = "#000000";
   next.locate(width - 210, height-110);        //Position Button
   next.width = 200;
   next.height = 100;
   next.textColor = "#ff0000";
   next.textSize = 100;
   next.textFont = titlefont;
   next.text = "Next";
   next.onPress = function(){  //When myButton is pressed
     this.color = "#AAAAFF";       //Change button color
mgr.showNextScene();
          //Show an alert message
   }
next.draw();

    myButton1 = new Clickable(0,0);     //Create button
    myButton1.locate(width/2 + 50, height-100);        //Position Button
    myButton1.width = 250;
    myButton1.height = 100;
    myButton1.textSize = 30;
    myButton1.text = " Finish Cleaning";
    myButton1.onPress = function(){  //When myButton is pressed
      this.color = "#AAAAFF";
  snd5A.play();


       //Change button color
    alert("You try your best but the dust is thick. You swear you can hear whispering from upstairs");                //Show an alert message
    }
    myButton1.onRelease = function(){
  console.log("I have been released!");


}
 myButton1.draw();


 myButton2 = new Clickable(0,0);     //Create button
 myButton2.locate(width/2 - 300, height-100);        //Position Button
 myButton2.width = 250;
 myButton2.height = 100;
 myButton2.textSize = 50;
 myButton2.text = "Inspect";
 myButton2.onPress = function(){  //When myButton is pressed
snd2A.play();
   this.color = "#AAAAFF";       //Change button color
   alert("The house creaks and moves in the wind, almost as if it will collapse at any moment. You feel you are being watched, better just clean and get out of here as fast as you can");                //Show an alert message
 }
myButton2.draw();


    }

    this.mouseDragged = function() {
      console.log("mouseDragged");
    //  octo1.moveupdate(mouseX,mouseY-40);
      //octo1.moveupdate(width/2,height/2-100);
    }


}
////////////////////////////// 3 /////////////////
function hope() {

    let loy= 255;
    this.setup = function()  {
        console.log("We are at setup for scene3");
        dirt = 90;
    }

    this.enter = function()  {
        let loy= 255;
        console.log("We are entering scene3");

        //send off stage and stop sounds


          // if (snd3A.isPlaying()) {
          //     snd3A.pause();
          // } else {
          //     snd2A.play();
          // }



        //snd2A.loop();

  }


    this.draw = function() {
        background(0);
        image(img4A,0,0,width,height);
        fill(101,62,4,dirt);
        rect(0,0,width,height);
        noStroke();
        fill(255,50);
        ellipse(mouseX,mouseY,150,150);
        ellipse(mouseX,mouseY,300,300);
      strokeWeight(5);
        stroke(10);
        fill(255);
        rect(width/2-300, height-200, 600,100, 10);
        fill(0);
        strokeWeight(1);
        textSize(24);

        text("You go up the stairs and are faced with a dark hallway.", width/2-290, height - 175);
        text(" Well, better get to cleaning.", width/2 - 290, height - 150);
        text("{hold left click and drag to start scrubbin!}", width/2 - 290, height - 125);
        if (mousePressed) {


          noStroke();
          fill(200,200,255,dirt+50);
        balls.forEach(ball => {
     ball.collide();
     ball.move();
     ball.display();

    });
        }
      //  octo1.update();
      //  octo1.display();
      next = new Clickable(0,0);     //Create button
      next.color = "#000000";
      next.locate(width - 210, height-110);        //Position Button
      next.width = 200;
      next.height = 100;
      next.textColor = "#ff0000";
      next.textSize = 100;
      next.textFont = titlefont;
      next.text = "Next";
      next.onPress = function(){  //When myButton is pressed
        this.color = "#AAAAFF";       //Change button color
   mgr.showNextScene();
             //Show an alert message
      }
   next.draw();

      myButton1 = new Clickable(0,0);     //Create button
      myButton1.locate(width/2 + 50, height-100);        //Position Button
      myButton1.width = 250;
      myButton1.height = 100;
      myButton1.textSize = 30;
      myButton1.text = " Finish Cleaning";
      myButton1.onPress = function(){  //When myButton is pressed
        this.color = "#AAAAFF";
  snd5A.play();

        alert("It's dark, but you do your best cleaning. Guess it's time to go into the bedroom");                //Show an alert message
      }
   myButton1.draw();


   myButton2 = new Clickable(0,0);     //Create button
   myButton2.locate(width/2 - 300, height-100);        //Position Button
   myButton2.width = 250;
   myButton2.height = 100;
   myButton2.textSize = 50;
   myButton2.text = "Inspect";
   myButton2.onPress = function(){  //When myButton is pressed
     this.color = "#AAAAFF";
       snd1A.play();    //Change button color
     alert("You feel eyes on you. You can't discern where they are coming from. Best to finish this job quickly. ");                //Show an alert message
   }
  myButton2.draw();
        drawSprites();

      }

      this.mouseDragged = function() {
        console.log("mouseDragged");
      //  octo1.moveupdate(mouseX,mouseY-40);
        //octo1.moveupdate(width/2,height/2-100);
      }

  }
////////////////////////////// 4 /////////////////
function dumb()  {


  this.setup = function() {
   dirt = 90;

     console.log("We are at setup for scene2");
     for (let i = 0; i < numBalls; i++) {
   balls[i] = new Ball(
     random(width),
     random(height),
     random(5, 10),
     i,
     balls
   );
 }
     //octo1 = new Octopi(width/2-100,height/2-100,color(0,0,0),.20);
 }


    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene 5");

        console.log("We are at setup for scene2");



        background("red");



        if (snd1A.isPlaying()) {
        // .isPlaying() returns a boolean
            snd1A.pause(); // .play() will resume from .pause() position
        //  background(255, 0, 0);
        } else {
            snd1A.play();
          //background(0, 255, 0);
        }


    }


    this.draw = function()
    {
      image(img5A,0,0,width,height);
         background(101,62,4,dirt);

      noStroke();
      fill(255,25);
      ellipse(mouseX,mouseY,150,150);
      ellipse(mouseX,mouseY,300,300);
    strokeWeight(5);
      stroke(10);
      fill(255);
      rect(width/2-300, height-200, 600,100, 10);
      fill(0);
      strokeWeight(1);
      textSize(24);

      text("You enter the bedroom at the end of the hallway.", width/2-290, height - 175);
      text(" It's a mess!", width/2 - 290, height - 150);
      text("Well, better get to cleaning.", width/2 - 290, height - 125);
if (mousePressed){

  noStroke();
  fill(200,200,255,dirt+50);
balls.forEach(ball => {
ball.collide();
ball.move();
ball.display();

});
}

next = new Clickable(0,0);     //Create button
next.color = "#000000";
next.locate(width - 210, height-110);        //Position Button
next.width = 200;
next.height = 100;
next.textColor = "#ff0000";
next.textSize = 100;
next.textFont = titlefont;
next.text = "Next";
next.onPress = function(){  //When myButton is pressed
  this.color = "#AAAAFF";       //Change button color
mgr.showNextScene();
       //Show an alert message
}
next.draw();

    //  octo1.update();
    //  octo1.display();
    myButton1 = new Clickable(0,0);     //Create button
    myButton1.locate(width/2 + 50, height-100);        //Position Button
    myButton1.width = 250;
    myButton1.height = 100;
    myButton1.textSize = 30;
    myButton1.text = " Finish Cleaning";
    myButton1.onPress = function(){  //When myButton is pressed
      this.color = "#AAAAFF";
snd5A.play();
       //Change button color
      alert("You hear a monsterous roar from outside!! Screw this job lets get the hell out of here!");                //Show an alert message
    }
 myButton1.draw();


 myButton2 = new Clickable(0,0);     //Create button
 myButton2.locate(width/2 - 300, height-100);        //Position Button
 myButton2.width = 250;
 myButton2.height = 100;
 myButton2.textSize = 50;
 myButton2.text = "Inspect";
 myButton2.onPress = function(){
   snd1A.play(); //When myButton is pressed
   this.color = "#AAAAFF";       //Change button color
   alert("The bedroom is dusty and unkempt, but fairly nice for the age of the house. A rythmic stomping can be heard outside faintly, but you ignore it.");                //Show an alert message
 }
myButton2.draw();
      drawSprites();




}
}
///////////////////////// 5 ///////////////////
function final()  {


  this.setup = function() {
    dirt = 90;
      background(0);
      console.log("We are at setup for scene2");
      for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(5, 10),
      i,
      balls
    );
  }
      //octo1 = new Octopi(width/2-100,height/2-100,color(0,0,0),.20);
  }
    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {

        console.log("We are at entering scene 5");
        background(0);
        console.log("We are at setup for scene2");

        // textX = 10;
        // textY = 0;
        loy = 100;
        background("red");



        //
        // if (snd6A.isPlaying()) {
        // // .isPlaying() returns a boolean
        //     snd6A.pause(); // .play() will resume from .pause() position
        // //  background(255, 0, 0);
        // } else {
        //     snd6A.play();
        //   //background(0, 255, 0);
        // }


    }


    this.draw = function()
    {

      //fadeAmount = 1;
      image(img1A,0,0,width,height);
      fill(100,fog);
rect(0,0, width,height );
if (fog < 0) fadeAmount = 1;

if (fog>200) fadeAmount = -1;

fog += fadeAmount;

      noStroke();
      fill(255,25);
      ellipse(mouseX,mouseY,150,150);
      ellipse(mouseX,mouseY,300,300);
    strokeWeight(5);
      stroke(10);
      fill(255);
      rect(width/2-300, height-200, 600,100, 10);
      fill(0);
      strokeWeight(1);
      textSize(24);

      text("You crash out of the house.", width/2-290, height - 175);
      text(" Your head spins, and the fog is closing in", width/2 - 290, height - 150);
      text("What do you do?", width/2 - 290, height - 125);



    //  octo1.update();
    //  octo1.display();
    myButton3 = new Clickable(0,0);     //Create button
    myButton3.color = "#fbff7a";
    myButton3.locate(width/2 + 50, height-100);        //Position Button
    myButton3.width = 250;
    myButton3.height = 100;
    myButton3.textSize = 30;
    myButton3.text = " Close your eyes";
    myButton3.onPress = function(){  //When myButton is pressed
       //Change button color
       fill(0);
rect(0,0,width, height)
    alert("You shut your eyes, your mind is too overloaded. You pass out.");                //Show an alert message
mgr.showNextScene(intro);
    }
    myButton3.onRelease = function () {


            }
 myButton3.draw();


 myButton2 = new Clickable(0,0);     //Create button
 myButton2.locate(width/2 - 300, height-100);        //Position Button
     myButton2.color = "#f7002d";
 myButton2.width = 250;
 myButton2.height = 100;
 myButton2.textSize = 50;
 myButton2.text = "Run!!";
 myButton2.onPress = function(){
   fill(255,darkness);
   rect(0,0, width,height);
mgr.showNextScene(road);
//When myButton is pressed
   this.color = "#AAAAFF";       //Change button color
   alert("You run off into the fog, no destination in mind.");

              //Show an alert message
 }
myButton2.onRelease = function(){
console.log("smelly");
}
myButton2.draw();
      drawSprites();
if (myButton2.onRelease){

  darkness++;
}
    }

    this.mouseDragged = function() {
      console.log("mouseDragged");
    //  octo1.moveupdate(mouseX,mouseY-40);
      //octo1.moveupdate(width/2,height/2-100);
    }

}
////////////////////////////// h /////////////////
function help() {

    let loy= 255;
    this.setup = function()  {
        console.log("We are at setup for scene3");
    }

    this.enter = function()  {
        let loy= 255;
        console.log("We are entering scene3");

        //send off stage and stop sounds


        //snd2A.loop();

    }


    this.draw = function() {
        background(0,0,255-loy);
        image(img3A,0,0,width,height);
        textAlign(CENTER);
        textSize(50);

        push();
        //
        fill(255);
        rect(0, 370, width, 80);

        fill(0);
        text("This is help", width/2, 100);
        textSize(25);
text("This is the help screen", width/2, 300);
text("Click the next button to go through each scene in chronological order", width/2, 350);
text("Use 1,2,3,4, and 5 to quickly switch through all Alex's scenes", width/2, 400);
text("Use q, w, e, r, t, and y to switch through all Deanna's scenes.", width/2, 440);
text("Alex Kajikami wrote the first 5 scenes(including the intro) along with their code", width/2, 540);
text("Deanna Gutierrez wrote the next 6 along with their code.", width/2, 590);
          // if (loy < 0) {
          //   loy = 255;
          // } else {
          //   loy--;
          // }
        //
        pop();
        next = new Clickable(0,0);     //Create button
        next.color = "#000000";
        next.locate(width - 210, height-110);        //Position Button
        next.width = 200;
        next.height = 100;
        next.textColor = "#ff0000";
        next.textSize = 100;
        next.textFont = titlefont;
        next.text = "Next";
        next.onPress = function(){  //When myButton is pressed
          this.color = "#AAAAFF";       //Change button color
mgr.showNextScene();
               //Show an alert message
        }
next.draw();
        drawSprites();  //used to show any sprites on the stage

    }

}


///////////////////////////////////////////////////
////////////////DEANNA CODE///////////////////////


////////////////////////////// 1 (road) /////////////////
function road()  {

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);


    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");


/////////button 1
        click1.locate(600, 980);
        click1.text = "Continue walking";

        click1.onRelease = function () {
        }

        click1.onOutside = function () {
          this.color = "gray";
        }

        click1.onPress = function () {
          alert("You continue walking as you feel the last of your humanity deteriorate. It is only a matter of time until you die of starvation since there were no sign of life nearby...");
        }
        click1.cornerRadius = 10;
        click1.textScaled = true;
        click1.resize(150, 70);

  //////////button 2
        click2.locate(750, 980);

        click2.onRelease = function () {
          mgr.showNextScene(town);
        }

        click2.onOutside = function () {
          this.color = "white";
        }
        click2.onPress = function () {
          alert("You decide to explore the neighboring town in hopes of help, food or shelter");
        }

        click2.cornerRadius = 10;
        click2.textScaled = true;
        click2.text = "Explore town";
        //click1.locate(60, 60);
        click2.resize(150, 70);

      //////////button 3
        click3.locate(200, 980);

        click3.onRelease = function () {
              }

        click3.onOutside = function () {
          this.color = "white";
              }

        click3.onPress = function () {
          alert("You're in the middle of what felt like a long and winding road. It's cold and foggy and you can hear your stomach growling, something feels off. You see a sign leading to a nearby town that next door to yours.");
              }

          click3.cornerRadius = 10;
          click3.textScaled = true;
          click3.text = "Inspect";
          click3.resize(200, 80);

      //////////button 4
          click4.locate(300, 900);

          click4.onOutside = function () {
            this.color = "white";
              }

          click4.cornerRadius = 10;
          click4.textScaled = true;
          click4.text = "After walking into the fog you notice a town. Keep walking or go to town?";
          click4.resize(500, 80);

        // textY = 0;
        loy = 100;
        background("red");




        if (snd1D.isPlaying()) {
        // .isPlaying() returns a boolean
            snd1D.pause(); // .play() will resume from .pause() position
        //  background(255, 0, 0);
        } else {
            snd1D.play();
          //background(0, 255, 0);
        }

        ////////////clickable/////////
            //Create, style and resize clickables.



    }


    this.draw = function()
    {
        background(0,0,255-loy);
        image(img1D,0,0,width,height);

        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);


        push();
        //
        translate(width/2,loy*3);
        fill(255);
        // text("This is a series...", 0, 100);
        // text("Click to Continue", 0, 150);
        // ellipse(0,0,30,30);
        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }

        pop();

        drawSprites();  //used to show any sprites on the stage

        /////////clickable///////
            //background(255);
               click1.draw();
                  click1.textSize = 15;
               click2.draw();
                  click2.textSize = 15;
               click3.draw();
                  click3.textSize = 30;
                click4.draw();
                  click4.textSize = 15;
    }


}

///////////////////////  2 (town) ////////////////////////
function town()  {


  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");
  }

  this.enter = function()
  {


      console.log("We are at  scene2 (again?????????)");

      //button 5
      click5.locate(600, 980);

      click5.onRelease = function () {
        mgr.showNextScene(store);
      }

      click5.onOutside = function () {
        this.color = "white";
      }

      click5.onPress = function () {
        alert("There's a local grocery store you can check for supplies, food or shelter. Maybe you can find help");
      }

      click5.cornerRadius = 10;
      click5.textScaled = true;
      click5.text = "Grocery store";
      click5.resize(150, 70);

  ///////////button 6
      click6.locate(750, 980);

      click6.onRelease = function () {
        mgr.showNextScene( store );
      }

      click6.onOutside = function () {
        this.color = "white";
      }

      click6.onPress = function () {
        alert("Wait you should stop by the store first! The church might be too risky right now!");
      }

      click6.cornerRadius = 10;
      click6.textScaled = true;
      click6.text = "Church";
      click6.resize(150, 70);


      //button 7
      click7.locate(200, 980);

      click7.onRelease = function () {
      }

      click7.onOutside = function () {
        this.color = "white";
      }

      click7.onPress = function () {
        alert("The town appears abandoned and based you can see that once busy with life. Those were the days... A local church and grocery store catches your attention");
      }

      click7.cornerRadius = 10;
      click7.textScaled = true;
      click7.text = "Inspect";
      click7.resize(200, 80);

      //////////button 8
          click8.locate(300, 900);

          click8.onOutside = function () {
            this.color = "white";
              }

          click8.cornerRadius = 10;
          click8.textScaled = true;
          click8.text = "You notice a grocery store and church. Where to first?";
          click8.resize(500, 80);


     // the sounds also play
      if (snd2D.isPlaying()) {
          console.log("PAUSINGGGG ");
      // .isPlaying() returns a boolean
          snd2D.pause(); // .play() will resume from .pause() position
      //  background(255, 0, 0);
      } else {
          snd2D.play();
           console.log("OooOOoOOooOoh spooooky");
        //background(0, 255, 0);
      }

  }

    this.draw = function()
    {
      background(0);
      image(img2D,0,0,width,height);
      noStroke();

      drawSprites();


      /////////clickable///////
             click5.draw();
                click5.textSize = 15;
             click6.draw();
                click6.textSize = 15;
             click7.draw();
                click7.textSize = 30;
             click8.draw();
               click8.textSize = 15;
    }

}


///////////////// 3 (store) /////////////////
function store()  {

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);


    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene3");

        // textX = 10;
        // textY = 0;
        loy = 100;
        background("red");

        ///////// button 9
                click9.locate(200, 980);

                click9.onOutside = function () {
                  this.color = "white";
                }

                click9.onPress = function () {
                  alert("Here you are in front of the store feeling relieved and a glimspe of hope.");
                }

                click9.cornerRadius = 10;
                click9.textScaled = true;
                click9.text = "Inspect";
                click9.resize(200, 80);

      //////////////button 10
                click10.locate(750, 980);
                click10.onRelease = function () {
                  mgr.showNextScene(insidestore);
                }

                click10.onOutside = function () {
                  this.color = "white";
                }

                click10.onPress = function () {
                  alert("There could be food, supplies or other survivors. Proceed to see what's in store for you! (insert maniacal laugh here)");
                }

                click10.cornerRadius = 10;
                click10.textScaled = true;
                click10.text = "Proceed into store";
                click10.resize(150, 70);

      //////////button 11
                click11.locate(200, 900);

                click11.onOutside = function () {
                  this.color = "white";
                        }

                click11.cornerRadius = 10;
                click11.textScaled = true;
                click11.text = "It's hard to think with all the distant screaming but you decided to check the store first for anything useful ";
                click11.resize(700, 80);

        if (snd1D.isPlaying()) {
        // .isPlaying() returns a boolean
            snd1D.pause(); // .play() will resume from .pause() position
        //  background(255, 0, 0);
        } else {
            snd1D.play();
          //background(0, 255, 0);
        }


    }


    this.draw = function()
    {
        background(0,0,255-loy);
        image(img3D,0,0,width,height);

        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);


        push();
        //
        translate(width/2,loy*3);
        fill(255);

        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }
        //
        pop();

        drawSprites();  //used to show any sprites on the stage

        click9.draw();
            click9.textSize = 30;
        click10.draw();
            click10.textSize = 15;
        click11.draw();
            click11.textSize = 15;

    }


}


///////////////// 4 (insidestore) /////////////////
function insidestore()  {

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);


    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene3");
        // textX = 10;
        // textY = 0;
        loy = 100;
        background("red");


        snd2D.pause();


///////// button 12
        click12.locate(200, 980);

        click12.onOutside = function () {
          this.color = "white";
        }

        click12.onPress = function () {
          alert("There are aisles with some bags of food and some shelves containing vitamins and serums but nothing of interest. Upon the last aisle you find a survivor! Do you...");
        }

        click12.cornerRadius = 10;
        click12.textScaled = true;
        click12.text = "Inspect";
        click12.resize(200, 80);

  /////////button 13
        click13.locate(600, 980);

        click13.onOutside = function () {
          this.color = "gray";
        }

        click13.onPress = function () {
          alert("You muster up your last bit of humanity and cry for help! Unfortunately, the surviving employee is petrified and you get shotgunned to the face. Try again...");
        }

        click13.cornerRadius = 10;
        click13.textScaled = true;
        click13.text = "Plead for help";
        click13.resize(150, 70);


////////////button 14
        click14.locate(750, 980);

        click14.onRelease = function () {
          mgr.showNextScene( church );
        }

        click14.onOutside = function () {
          this.color = "black";
          click14.textColor = "red";
        }

        click14.onPress = function () {
          alert("Upon looking at the survivor, your stomach growls agressively... You give in to a hostile, animalistic hunger, quickly attacking and feasting on the poor soul violently as you feel your humanity drift away. You have become a mindless beast...");
        }

        click14.cornerRadius = 10;
        click14.textScaled = true;
        click14.text = "Attack survivor!!!";
        click14.resize(150, 70);

    //////////button 15
        click15.locate(300, 900);

        click15.onOutside = function () {
          this.color = "white";
              }

        click15.cornerRadius = 10;
        click15.textScaled = true;
        click15.text = "You come into contact with a survivor & feel an eager hunger building up";
        click15.resize(500, 80);

        if (snd4D.isPlaying()) {
        // .isPlaying() returns a boolean
            snd2D.pause(); // .play() will resume from .pause() position
        //  background(255, 0, 0);
        } else {
            snd4D.play();
          //background(0, 255, 0);
        }

    }


    this.draw = function()
    {
        background(0,0,255-loy);
        image(img7D,0,0,width,height);

        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);


        push();
        //
        translate(width/2,loy*3);
        fill(255);
        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }
        //
        pop();

        drawSprites();  //used to show any sprites on the stage

        click12.draw();
              click12.textSize = 30;
        click13.draw();
            click13.textSize = 15;
        click14.draw();
            click14.textSize = 15;
        click15.draw();
            click15.textSize = 15;
    }


}


////////////// 5 (church) ////////////////////
function church()  {

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);


    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene4");
        // textX = 10;
        // textY = 0;
        loy = 100;
        background("red");

        snd2D.pause();


/////// button 16
        click16.locate(200, 980);

        click16.onOutside = function () {
          this.color = "white";
        }

        click16.onPress = function () {
          alert("In a blind rage and hunger you chased the sound of your next possible prey to what used to be a church. You feel weak and ravenous due to your newly horrifying form. Will you proceed?");
        }

        click16.cornerRadius = 10;
        click16.textScaled = true;
        click16.text = "Inspect";
        click16.resize(200, 80);

/////////// button 17
        click17.locate(750, 980);

        click17.onRelease = function () {
          mgr.showNextScene( insidechurch );
        }

        click17.onOutside = function () {
          this.color = "black";
          click17.textColor = "red";
        }

        click17.onPress = function () {
          alert("You angerily storm into the the church, hungry and screaming")
        }

        click17.cornerRadius = 10;
        click17.textScaled = true;
        click17.text = "Barge into church!!!";
        click17.resize(150, 70);

  //////////button 18
        click18.locate(200, 900);

        click18.onOutside = function () {
            this.color = "white";
                          }

        click18.cornerRadius = 10;
        click18.textScaled = true;
        click18.text = "After your violent incident, you aggressively raced towards noise that led you to the church!";
        click18.resize(700, 80);


        if (snd4D.isPlaying()) {
        // .isPlaying() returns a boolean
            snd2D.pause(); // .play() will resume from .pause() position
        //  background(255, 0, 0);
        } else {
            snd4D.play();
          //background(0, 255, 0);
        }

    }


    this.draw = function()
    {
        background(0,0,255-loy);
        image(img4D,0,0,width,height);

        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);


        push();
        //
        translate(width/2,loy*3);
        fill(255);
        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }
        //
        pop();

        drawSprites();  //used to show any sprites on the stage


        click16.draw();
            click16.textSize = 30;
        click17.draw();
            click17.textSize = 15;
        click18.draw();
            click18.textSize = 15;
    }

}


////////////// 6 (insidechurch) ////////////////////
function insidechurch()  {

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);


    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene4");
        // textX = 10;
        // textY = 0;
        loy = 100;
        background("red");

//         /////// button 19
                click19.locate(200, 980);

                click19.onOutside = function () {
                  this.color = "white";
                }

                click19.onPress = function () {
                  alert("The silence is deafening as you quietly explore the local church. You notice a backdoor... Will you proceed?");
                }

                click19.cornerRadius = 10;
                click19.textScaled = true;
                click19.text = "Inspect";
                click19.resize(200, 80);

        /////////// button 20
                click20.locate(750, 980);

                // click20.onRelease = function () {
                //   mgr.showNextScene( intro );
                // }

                click20.onOutside = function () {
                  this.color = "black";
                  click20.textColor = "red";
                }

                click20.onPress = function () {
                  alert("You charge through the backdoor and silently look around... A large monster from the ceiling lunges itself at you and begins consuming you alive as you roar in pain. You tried to escape the very thing you have become but in the end you are still prey... The end...");
                }

                click20.cornerRadius = 10;
                click20.textScaled = true;
                click20.text = "Enter the backrooms!!!"
                click20.resize(150, 70);

  //////////button 21
                click21.locate(200, 900);

                click21.onOutside = function () {
                  this.color = "white";
                                  }

                click21.cornerRadius = 10;
                click21.textScaled = true;
                click21.text = "It's erriely silent but you sense a presence. There's a door leading to church's backrooms";
                click21.resize(700, 80);


        if (snd4D.isPlaying()) {
        // .isPlaying() returns a boolean
            snd2D.pause(); // .play() will resume from .pause() position
        //  background(255, 0, 0);
        } else {
            snd4D.play();
          //background(0, 255, 0);
        }


    }


    this.draw = function()
    {
        background(0,0,255-loy);
        image(img6D,0,0,width,height);

        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);


        push();
        //
        translate(width/2,loy*3);
        fill(255);

        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }
        //
        pop();

        drawSprites();  //used to show any sprites on the stage

        click19.draw();
            click19.textSize = 30;
        click20.draw();
            click20.textSize = 15;
        click21.draw();
            click21.textSize = 15;
    }

}
