document.getElementById("btn").addEventListener("click", function() {
    let txt = document.getElementById("input-text").value;
    console.log(txt)
    let result = document.getElementById("result")
    if(!txt) result.textContent ="Noob, Enter Something!"
    else {
    let isp = palindrome(txt);
    if(isp === true)
    result.textContent=("Yep, that's palindrome");
    else
    result.textContent=("Nope, that's not a palindrome")
    }
})

function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for(var i = 0, len = str.length - 1; i < len/2; i++) {
      if(str[i] !== str[len-i]) {
        return false;
      }
    }
    return true;
  }