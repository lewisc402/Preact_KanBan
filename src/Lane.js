import { Component } from "preact"
import { Card } from "antd";

class Lane extends Component {
  render() {
    return(
      <Card title="Card title" bordered={false} style={{ width: 300 }}>        
        <div>
          <Card style={{ margin: 15 }}>bbbbb</Card>
          <Card style={{ margin: 15 }}>aaaaa</Card>
        </div>
      </Card>
    )
  }
}
export default Lane
