import { Component } from "preact"
import { Card } from "antd";

class Lane extends Component {
  render() {
    return(
      <Card title="Card tdditle" bordered={false} style={{ width: 300 }}>
        <p>in Card content</p>
      </Card>
    )
  }
}
export default Lane
