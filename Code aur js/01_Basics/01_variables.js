const accountId = 144553
let accountEmail = "123@gmai.com"
var accountPassword = "321"  /* Prefer not to use var because of issue in block scope and functional scope */
accountCity = "Patna"
let accountState;

// accountId = 67  // not allowed 

accountEmail = "321@gmail.com"

accountPassword = "4353"
accountCity = "Noida"
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);