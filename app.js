let myFriends = ['Sage', 'William', 'John', 'Noah', 'Chad']

for (let i = 0; i < myFriends.length; i++) {
let friend = myFriends[i];  
console.log(myFriends[i].toUpperCase() + ":");

    for(let i = 99; i > 0; i--) {
        if(i > 2) { 
            console.log(i + " lines of code in the file, " + i + " lines of code; " + friend + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file.");
        } else if(i == 2) { 
            console.log(i + " lines of code in the file, " + i + " lines of code; " + friend + " strikes one out, clears it all out, " + (i - 1 ) + " line of code in the file.");
        } else if (i == 1) { 
            console.log(i + " line of code in the file, " + i + " line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file!");
        };
    };
};  