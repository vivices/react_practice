import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Card  } from 'antd';

class Reminder extends Component {
    render() {
        return (
            <div>
                <Card title="Reminder" style={{ width: 300 }}>
                    <p>drink water</p>
                    <p>take door</p>
                    <p>drive my car</p>
                </Card>
            </div>
        )
    }
}

export default Reminder;