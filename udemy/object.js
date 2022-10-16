var facebookProfile = {
  name : "Pankaj Sharma",
  friends: 0,
  messages: [],
  postMessage: function(message){
    facebookProfile.messages.push(message);
  },
  deleteMessage:function(index){
    facebookProfile.messages.splice(index-1,1);
  },
  addFriend: function(){
    facebookProfile.friends = facebookProfile.friends+1;
  },
  removeFriend: function(){
    facebookProfile.friends = facebookProfile.friends-1;
  },
}
facebookProfile.addFriend();
console.log(facebookProfile.friends);
for (let i =0; i<3; i++){
  facebookProfile.postMessage("This is working");
}
console.log(facebookProfile.messages);