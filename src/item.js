import { Component } from "preact";
import { Card } from "antd";
import { DragSource } from "react-dnd";
import { DropTarget } from "react-dnd";

const Types = {
  CARD: "card"
};

const ItemSource = {
  beginDrag(props) {
    return {};
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      console.log("end");
      return;
    }

    console.log("move");
    const item = monitor.getItem();
    console.log(item.text);
  }
};

const ItemTarget = {};

function collectSource(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

function collectTarget(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget()
    // You can ask the monitor about the current drag state:
    // isDragging: monitor.isDragging()
  };
}

class Item extends Component {
  render(props, state) {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    return connectDragSource(
      connectDropTarget(
        <div>
          <Card bordered={true} style={{ margin: 4 }}>
            {props.text}
          </Card>
        </div>
      )
    );
  }
}

Item = DragSource(Types.CARD, ItemSource, collectSource)(Item);
Item = DropTarget(Types.CARD, ItemTarget, collectTarget)(Item);

// export default DragSource(Types.CARD, ItemSource, collect)(Item);
export default Item;
