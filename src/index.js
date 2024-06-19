import "../style.scss";
import { btnChange } from "./btn";
import { changeColor } from "./color";
btnChange.addEventListener("click", function () {
  changeColor("pink");
});
console.log("Hello World");