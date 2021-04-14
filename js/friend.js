class Friend {
    constructor(){}

    hide(){
        this.submitName.hide();
        this.Name.hide();
    }

    display(){
        this.submitName = createButton("Submit");
        this.submitName.class("Submit");
        this.Name = createInput("").attribute("placeholder","Your Name");
        this.Name.class("textbox");
        this.Name.position(width / 2.3, height / 2 - 120);
        this.submitName.position(width / 2.3, height / 2 - 60);

        this.submitName.mousePressed(() =>{
            this.Name.hide();
        this.submitName.hide();
        member.name = this.Name.value();
        membersCount += 1;
        member.index = membersCount;
        member.update();
        member.updateCount(membersCount);

        this.Room2 = createInput("").attribute("placeholder","Room No.");
        this.Room2.class("textbox");
        this.submitRoom = createButton("Submit");
        this.submitRoom.class("Submit");

        this.submitRoom.mousePressed(() =>{
            this.Room2.hide();
            this.submitRoom.hide(); 

            member.Room2 = this.Room2.value();

        });
        });
    }
}