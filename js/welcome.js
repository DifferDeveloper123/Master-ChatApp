class Welcome {
    constructor() {
      this.logoImage = ("images/ChatApp.png");
      this.logo = createImg(this.logoImage);
  
      this.creatorButton = createButton("Creator");
      this.friendButton = createButton("friend");
    }
  
    hideElements() {
      this.creatorButton.hide();
      this.friendButton.hide();
    }
  
    setElementPosition() {
      this.logo.position(width / 3.2, 10);
      this.creatorButton.position(width / 2.3, height / 2 - 100);
      this.friendButton.position(width / 2.3, height / 2);
    }
  
    setElementStyle() {
      this.creatorButton.class("customButton");
      this.friendButton.class("customButton");
    }
  
    handleOnpress() {
      this.creatorButton.mousePressed(() => {
        this.hideElements();
        creator.display();
      });
  
      this.friendButton.mousePressed(() => {
        this.hideElements();
        friend .display();
      });
    }
  
    display() {
      this.setElementStyle();
      this.setElementPosition();
      this.handleOnpress();
    }
  }