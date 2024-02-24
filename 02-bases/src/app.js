
// const { emailTamplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
const { getuserById } = require('./js-foundation/03-callback')



getuserById( 10,function(error,user){
    if(error){
        throw new Error(error) 
    }

    console.log(user)
} )



//console.log(getuserById(3))
 
//console.log(emailTamplate);