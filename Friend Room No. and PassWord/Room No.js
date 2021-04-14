class FriendRoomNo{
    constructor(){}

    hide(){
        this.Room2.hide();
        this.submitRoom.hide();
    }

    display(){
        this.Room2 = createInput("").attribute("placeholder","Room No.");
        this.Room2.class("textbox");
        this.submitRoom = createButton("Submit");
        this.submitRoom.class("Submit");
        this.Room2.position(width / 2.3, height / 2 - 120);
        this.submitRoom.position(width / 2.3, height / 2 - 60);

        this.submitRoom.mousePressed(() =>{
            this.Room2.hide();
            this.submitRoom.hide(); 

            member.Room2 = this.Room2.value();
        });
    }
}