//////////////////////////////////////////////////////////////////////
// Function 1 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(data) {
    var array = Object.keys(data);
    var result = array.join(" ");
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var cache = [];
    for (var key in object) {
        cache.push(object[key]);
    }
    var newCache = [];
    for(var i = 0; i < cache.length; i++) {
        if(typeof cache[i] === "string") {
            newCache.push(cache[i]);
        }
    }
    var result = newCache.join(" ");
    
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(Array.isArray(object.noises)) {
        if(object.noises.length > 1) {
            return object.noises.join(" ");
        } else {
            return "there are no noises";
        }
    }
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var friendsList = [];
    
    for(var index in array) {
        friendsList.push(array[index].name);
    }
    
    var result = [];
  
    for(var i = 0; i < array.length; i++) {
        if(array[i].name === name) {
                for(var k = 0; k < friendsList.length; k++) {
                    if (array[i].friends.indexOf(friendsList[k]) > -1) {
                    } else if(friendsList[k] === array[i].name && array[i].name === name) {
                    } else {
                      result.push(friendsList[k]);
                    }
                }
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
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.maybeNoises = maybeNoises;
    module.exports.nonFriends = nonFriends;
}