var names = ["vidhi", "swayam", "ansh"]

var vidhi = ["Vidhi", "Mend", "Demo", 3 , "10/3/2006"]


var vidhi1 = {
    firstName: "Vidhi",
    lastName: "Mend",
    dob: "10/02/2006",
    goestToSchool: true,
    rollNo: 4,
    // In object and classes we call functions as methods
    gotToSchool: function(){
        return this.firstName + " is going to school";
    }
}
// this, methods 

console.log(vidhi1.firstName)
console.log(vidhi1.gotToSchool())

// Task for vidhi -
/**
 * Create a object of your choice 
 * it should have 5 key value pair
 * it should have 3 methods 
 */