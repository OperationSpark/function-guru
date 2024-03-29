//////////////////////////////////////////////////////////////////////
// Function 1 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    return string.replace(/\S*/g, capitalizeWord);
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var capitalizedName = capitalizeWord(object.name);
    return "Welcome " + capitalizedName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var capitalizedName = capitalizeWord(object.name);
    var capitalizedSpecies = capitalizeWord(object.species);
    return capitalizedName + " is a " + capitalizedSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.friends) {
        for(var i = 0; i < object.friends.length; i++) {
            if(object.friends[i] === name) {
                return true;
            } 
        }
    }
    return false;
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i in array) {
        var x = array[i];
        delete object[x];
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = array.sort();
    var result = [];
    for(var i = 0; i < newArray.length; i++) {
        if(newArray[i + 1] !== newArray[i]) {
            result.push(array[i]);
        }
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}