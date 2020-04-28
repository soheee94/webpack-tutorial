import "normalize.css";
import styles from "./index.css";
import $ from "jquery";
import logo from "./assets/logo.png";
import fail from "./assets/fail.svg";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello Webpack";

  console.log(styles);
  element.classList = styles.helloWebpack;

  const imgElement = document.createElement("img");
  imgElement.src = fail;

  element.appendChild(imgElement);

  return element;
}

console.log(IS_PRODUCTION);

document.body.appendChild(component());
