const accountID = 1
let accountEmail = "Butkus@google.com"
var accountPassword = "123"
accountCity = "NewYork"
let accountState;

/*
    Prefer not to use var
    because of issues in block scope and 
    functional scope.
*/

//accountID = 2

accountEmail = "bks@mail.com"
accountPassword  = "1212121"
accountCity = "Boston"

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
