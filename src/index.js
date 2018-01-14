
import {render} from "preact";
import Lane from "./Lane"
import 'antd/dist/antd.css';
import { Card, Button } from "antd";

render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Card tdditle" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Button type="primary">but</Button>
    <p/>
    <Lane>laaaahh</Lane>
  </div>
  , document.getElementById('container'));
