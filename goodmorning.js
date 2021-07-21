function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function greeting() {
    for (let i = 0; i < 9999; i++) {

        var random = Math.floor(Math.random() * 15) + 1;
        if(random == 1){
            console.log("Good morning! Hope you slept well :)");
        }else if(random == 2){
            console.log("Hope you're ready for a really good day!"); 
        }else if(random == 3){
            console.log("I hope you slept well!");
        }else if(random == 4){
            console.log("Have a good day!");
        }else if(random == 5){
            console.log("Good morning.");
        }else if(random == 6){
            console.log("Don't forget to shower and brush your teeth!");
        }else if(random == 7){
            console.log("Good morning sunshine, today is gonna be a great day!");
        }else if(random == 8){
            onsole.log("Have you had breakfast yet? You should eat breakfast, it's important.");
        }else if(random == 9){
            console.log("You should take out the trash before you forget");
        }else if(random == 10){
            console.log("It's about time you're up. ");
        }else if(random == 11){
            console.log("A marvelous morning to you, my friend. You are someone who never quits, mainly because you never start. ");
        }else if(random == 12){
            console.log("Get your butt out of bed, you lazy ass! ");
        }else if(random == 13){
            console.log("May your day be as spectacular as me.");
        }else if(random == 14){
            console.log("Am I still dreaming or do you really look that amazing in the morning?");
        }else if(random == 15){
            console.log("Don’t make me kill you at this hour in the morning.");
        }
        await sleep(86400000);
        console.clear();
    }
  }
  
  greeting();
