// ✅✅✅✅https://www.codewars.com/kata/5264d2b162488dc400000001
//  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"
str = "Hey fellow warriors";
//  str.length[-1].delete

function spinWords(string) {
  strcut = string.split(" ");
  console.log("🚨🔥 :", strcut);

  for (let i = 0; i < strcut.length; i++) {
    mot = [];
    console.log("----", strcut[i]);

    if (strcut[i].length >= 5) {
      console.log(">>>", strcut[i]);
      for (let j = 0; j < strcut[i].length; j++) {
        mot += strcut[i][strcut[i].length - j - 1];
      }
      strcut[i] = mot;
      mot = "";
    }
  }

  return strcut.join(" ");
}
console.log(spinWords(str));
