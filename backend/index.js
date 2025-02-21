const bcrypt = require('bcrypt')

bcrypt.hash("123456", 10, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash)
});
// console.log(hashed)