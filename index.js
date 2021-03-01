function open(){
  document.getElementById("side_nav").style.transform = "translateX(0%)";
}
function close() {
  document.getElementById("side_nav").style.transform = "translateX(-100%)";
}
function reset() {
  document.getElementById("decimal").value = "";
  document.getElementById("binary").value = "";
}
function binary() {
  let num = document.getElementById("decimal").value;
  if (
    !isNaN(num) &&
    !num.includes("e") &&
    !num.includes("-")
  ) {
    if (num.includes(".")) {
      let temp = num.slice(num.indexOf("."));
      temp = temp * 2;
      let j = 1;
      let float_binary = temp.toString().slice(0, temp.toString().indexOf("."));
      while (j < 20) {
        temp = (
          temp.toString().slice(temp.toString().indexOf(".")) * 2
        ).toFixed(3);
        float_binary =
          float_binary + temp.toString().slice(0, temp.toString().indexOf("."));
        j++;
        if (temp[temp.toString().indexOf(".") + 1] == 0) {
          j = 20;
        }
      }
      num = Math.trunc(num);
      let integer_binary = "";
      let k = 1;
      while (num > 0) {
        if (integer_binary == "") {
          integer_binary = 0;
        }
        integer_binary = integer_binary + k * (num % 2);
        num = Math.floor(num / 2);
        k = k * 10;
      }
      if (integer_binary == "") {
        document.getElementById("binary").value = "0." + float_binary;
      } else {
        document.getElementById("binary").value =
          integer_binary + "." + float_binary;
      }
    } else {
      document.getElementById("error").style.display = "none";
      let binary = "";
      let i = 1;
      while (num > 0) {
        if (binary == "") {
          binary = 0;
        }
        binary = binary + i * (num % 2);
        num = Math.floor(num / 2);
        i = i * 10;
      }
      document.getElementById("binary").value = binary;
    }
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("decimal_name").style.animation =
      "shake .4s linear";
    document.getElementById("decimal").style.animation = "shake .4s linear";
    setTimeout(animation_reset, 400);
  }
}
function animation_reset() {
  document.getElementById("decimal").style.animation = "none";
  document.getElementById("decimal_name").style.animation = "none";
}
