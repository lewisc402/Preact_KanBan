import { render } from "preact";
import Lane from "./lane";
import "antd/dist/antd.css";
import { Card, Button } from "antd";

render(
  <div style={{ background: "#ECECEC", padding: "30px" }}>
    <Lane/>
  </div>,
  document.getElementById("root")
);
