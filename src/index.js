import "normalize.css";
import styles from "./index.module.scss";
import $ from "jquery";
import logo from "./assets/logo.png";
import fail from "./assets/fail.svg";
import "@babel/polyfill";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello Webpack";

  console.log(styles);
  element.classList = styles.helloWebpack;

  const imgElement = document.createElement("img");
  imgElement.src = fail;
  imgElement.classList = styles.slackImg;

  element.appendChild(imgElement);

  return element;
}

console.log(IS_PRODUCTION);

document.body.appendChild(component());
