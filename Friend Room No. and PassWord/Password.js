class FriendPassword{
    constructor(){}

    hide(){
        this.PassWord2.hide();
        this.SubmitPassWord.hide(); 
    }
    
    display(){
        this.PassWord2 = createInput("").attribute("placeholder","Password");
        this.PassWord2.class("textbox");
        this.SubmitPassWord = createButton("Submit");
        this.SubmitPassWord.class("Submit");
        this.PassWord2.position(width / 2.3, height / 2 - 120);
        this.SubmitPassWord.position(width / 2.3, height / 2 - 60);
   
        this.SubmitPassWord.mousePressed(() =>{
            this.PassWord2.hide();
            this.SubmitPassWord.hide(); 

            member.PassWord2 = this.PassWord2.value();
        });

    }
}