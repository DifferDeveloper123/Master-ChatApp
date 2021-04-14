class Chat{
    constructor(){}

    getState(){
     var chatStateRef = database.ref('chatState');
     chatStateRef.on("value",(data) =>{
         chatState = data.val();
     })
    }

    update(state){
         database.ref('/').update({
             chatState: state
         })
    }

    async start(){
        if(chatState == null){
            welcome.display();
        }

        if(chatState == 0 && member.PassWord == member.PassWord2 && member.Room == member.Room2){
            var memberCountRef = database.ref('memberCount').once("value");
            if(memberCountRef.exists()){
                memberCount = memberCountRef.val();
                memberCountRef.getCount();
            }
        }
    }

    play(){
        Member.getMemberInfo();

        background(rgb(18,140,126));
        image(chatbg,0,-displayHeight*4,displayWidth,displayHeight*5);
    
        var index = 0;

        var x = displayWidth/2 - 680;

        for (var plr in allfighters) {
            //add 1 to the index for every loop
            index = index + 1;
    
            //position the cars a little away from each other in x direction
            x = x + 455;
            //use data form the database to display the cars in y direction
            y = height - allPlayers[plr].distance;
            cars[index - 1].x = x;
    
            if (index === player.index) {
              stroke(10);
              fill("red");
              ellipse(x, y, 60, 60);
              cars[index - 1].shapeColor = "red";
              camera.position.x = width / 2;
            }
          }


    }

}