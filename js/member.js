class Member{
    constructor(){
        this.name = null;
        this.Room = null;
        this.Room2 = null;
        this.PassWord = null;
        this.PassWord2 = null;
        this.index = null;
    }

    getCount(){
        var memberCountRef = database.ref('memberCount');
        memberCountRef.on("value", (data) =>{
            memberCount = data.val();
        })
    }

    updateCount(count){
       database.ref('/').update({
           memberCount: count
       })
      }

    update(){
        var memberIndex  = "members/member" + this.index;
        database.ref(memberIndex).set({
            name: this.name,
            roomNo: this.Room,
            passWord: this.PassWord
        })
    }

    static getMemberInfo(){
        var memberInfoRef = database.ref('members');
        memberInfoRef.on("value",(data)=>{
          allMembers = data.val();
        })
      }

}