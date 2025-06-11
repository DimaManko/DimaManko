function friend(friends){
  //your code here
 return  friends.filter(elem => elem.length === 4)
}

console.log(friend(["Peter", "Stephen", "Joe"]));
