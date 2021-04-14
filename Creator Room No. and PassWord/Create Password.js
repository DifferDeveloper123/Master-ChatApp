class CreatePassword{
    constructor(){
        
    }

    hide(){
        this.PassWord.hide();
        this.SubmitPassWord.hide(); 
    }
    
    display(){
        this.PassWord = createInput("").attribute("placeholder","Create Password");
        this.PassWord.class("textbox");
        this.SubmitPassWord = createButton("Submit");
        this.SubmitPassWord.class("Submit");
        this.PassWord.position(width / 2.3, height / 2 - 120);
        this.SubmitPassWord.position(width / 2.3, height / 2 - 60);
   
        this.SubmitPassWord.mousePressed(() =>{
            this.PassWord.hide();
            this.SubmitPassWord.hide(); 

            member.PassWord = this.PassWord.value();
        });

    }
}