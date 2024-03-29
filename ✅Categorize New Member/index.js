//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
 data =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// let data = [[32,18],[87,7],[36,23],[37,7],[14,20]]
// function openOrSenior(data){ 
// let newstr= []
//     data.forEach(element => {
//         parseInt(element)
//     element[0] >= 55 && element[1] > 7 ? newstr.push("Senior") : newstr.push("Open")
//     });
//     return newstr
// }
// console.log(openOrSenior(data))

//+55 et handicape +7
//
function test (datas){
    newstr = []
    datas.map((element)=>{
        if(element[0] >= 55 && element[1] >= 7) newstr.push("Senior")
        else newstr.push("Open")
    })
    return newstr
}

console.log(
test(data)

);