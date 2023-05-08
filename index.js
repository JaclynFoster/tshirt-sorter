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
    l: [],
    xs: []
   }
  for(let i = 0; i < str.length; i++) {
  //   str[i].toLowerCase().trim()
 if (str[i] === "s") {
    strObj.s.push(str[i])
  } else if (str[i] === "m") {
    strObj.m.push(str[i])
  } else if (str[i] === "l") {
    strObj.l.push(str[i])
    
  } else if(str[i] === "x" && str[i + 1] === "s") {
      strObj.xs.push(str[i], str[i + 1])
  } 
  }
 let sJoin = strObj.s.join("")
 let mJoin = strObj.m.join("")
 let lJoin = strObj.l.join("")
 let xsJoin = strObj.xs.join("")

  return xsJoin + sJoin + mJoin + lJoin 
}

console.log(tshirtSorter("mlslmsmlslmsmlsmlsxsxsxsxs"))

const tshirtSorter2 = str => str.toLowerCase().trim().split("").sort().reverse().join("")
    

console.log(tshirtSorter2("mlslmsmlslmsmlsmls"))

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