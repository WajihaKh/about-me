
function nameOfPerson() {
let name = prompt("Hello, what is your name?" );
document.write(" It is a pleasure meeting you " + name)
}


function howIsYourDay() {

    let emotions = '';
    let good = true;
    let alright = true;
    let great = true;

    while ( emotions != good || alright || great ) {
        emotions= prompt ("How is your day going?");
        if ( emotions != good || alright || great ) {
        alert("Sorry you're not feeling well, come back later!");

    } else {
        alert("That's good to hear!")
    }
}
    document.write("Enjoy the website!");
}


function questionOne() {

if (confirm("Are you ready for work?")) {
    document.write(" LETS GO!");
} else {
    alert(" GOODNIGHT");
}
}

function questionTwo() {
if (confirm("Have you ever walked your cat?")) {
    document.write(" Awesome training!");
} else {
    alert("It's okay! Mine did not like the leash either!");
}
}




document.write(" ଘ(੭ˊᵕˋ)੭ ");

// One while loop 
// One loop with an emoji