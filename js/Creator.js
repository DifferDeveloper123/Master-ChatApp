class Creator {
    constructor(){
  
    }

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

        creatorRoom.display();

        });
    }
}