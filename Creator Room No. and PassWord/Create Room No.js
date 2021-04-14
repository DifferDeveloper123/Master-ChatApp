class CreateRoomNo{
    constructor(){
        
    }

    hide(){
        this.Room.hide();
        this.submitRoom.hide();
    }

    display(){
        this.Room = createInput("").attribute("placeholder","Create Room No.");
        this.Room.class("textbox");
        this.submitRoom = createButton("Submit");
        this.submitRoom.class("Submit");
        this.Room.position(width / 2.3, height / 2 - 120);
        this.submitRoom.position(width / 2.3, height / 2 - 60);

        this.submitRoom.mousePressed(() =>{
            this.Room.hide();
            this.submitRoom.hide(); 

            member.Room = this.Room.value();

            creatorPassword.display();
            
        });
    }
}