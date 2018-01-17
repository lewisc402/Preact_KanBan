import { Component } from "preact";
import linkState from "linkstate";
import { Card, Input } from "antd";
import Item from "./item";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const ENTER_KEY = 13;
const itemData = [{ id: 1, text: "text1" }, { id: 2, text: "text2" }];

class Lane extends Component {
  constructor() {
    super();
    this.state = { newItem: "" };
    this.data = itemData;
  }

  handleNewItemKeyDown = e => {
    if (e.keyCode !== ENTER_KEY) return;
    e.preventDefault();

    let val = this.state.newItem.trim();
    if (val) {
      this.data = this.data.concat({ id: 3, text: val });
      this.setState({});
      console.log(this.data);
    }
  };

  render({}, state) {
    return (
      <div style={{ width: 300 }}>
        <Card title="a" bordered={false}>
          {this.data.map(dt => <Item text={dt.text} />)}

          <p />
          <Input
            type="text"
            value={state.newItem}
            onInput={linkState(this, "newItem")}
            onKeyDown={this.handleNewItemKeyDown}
          />
        </Card>
        <Card bordered={false}>
          <a>add new card....</a>
        </Card>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Lane);
