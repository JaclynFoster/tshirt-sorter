// Write a function that will take in a string containing only s, m, and l characters.
// Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. 
//Your function should return this pile of t-shirts sorted by small, then medium, then large.
// The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l.
// The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll

const tshirtSorter = (str) => {
   let strObj = {
    s: [],
    m: [],
    l: []
   }
  for(let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase().trim()
    if (letter === "s") {
        strObj.s.push(letter)
    } else if (letter === "m") {
        strObj.m.push(letter)
    } else if (letter === "l") {
        strObj.l.push(letter)
    }

  }
 let sJoin = strObj.s.join("")
 let mJoin = strObj.m.join("")
 let lJoin = strObj.l.join("")

  return sJoin + mJoin + lJoin
}

// console.log(tshirtSorter("mlslmsmlslmsmlsmls"))

const tshirtSorter2 = str => str.toLowerCase().trim().split("").sort().reverse().join("")
    

//console.log(tshirtSorter2("mlslmsmlslmsmlsmls"))

const tshirtSorter3 = str => {
   //let strObj = {s:"", m:"", l:""}
   let strObj = {}
   str.toLowerCase().trim().split("")
   .forEach(letter => {
    if(!strObj[letter]) {  //This checks to see if property exists on the object if not then we add it.
        // This is useful if we do not know what sizes are included in the string like size XS
        strObj[letter] = ""
    }
    strObj[letter] += letter
   })
  return strObj.s + strObj.m + strObj.l
}

console.log(tshirtSorter3("mlslmsmlslmsmlsmls"))