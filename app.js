let myFriends = ['Sage', 'William', 'John', 'Noah', 'Chad']

for (let i = 0; i < myFriends.length; i++) {
let friend = myFriends[i];  
console.log(myFriends[i].toUpperCase() + ":");
    for(let j = 99; j > 0; j--) {
        if(j > 2) { 
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");
        } else if(j == 2) { 
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.");
        } else if (j == 1) { 
            console.log(j + " line of code in the file, " + j + " line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file!");
        };
    };
};  