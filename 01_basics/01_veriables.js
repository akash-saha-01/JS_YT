const accountId = 144553
let accountEmail = "akash@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ak@ak.com"
accountPassword = "1236"
accountCity = "Mumbai"
console.log(accountId);

/*
Prefer not to use var 
because in issue in block and functional scope
*/
console.table([accountEmail, accountId, accountCity, accountState])
