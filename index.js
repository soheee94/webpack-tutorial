import "normalize.css";
import styles from "./index.css";
import $ from "jquery";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello Webpack";

  console.log(styles);
  element.classList = styles.helloWebpack;

  return element;
}

console.log(IS_PRODUCTION);

document.body.appendChild(component());
