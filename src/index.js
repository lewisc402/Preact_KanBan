
import {render} from "preact";
import Lane from "./Lane"
import 'antd/dist/antd.css';
import { Card, Button } from "antd";

render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>    
    <Lane>
    </Lane>
  </div>
  , document.getElementById('root'));
