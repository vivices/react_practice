import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { List } from 'antd';

const LIST = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class ShoppingList extends Component {
    render() {
        return (
            <div>
                <h3 style={{ margin: '16px 0' }}>SHOPPING LIST</h3>
                <List
                    size="large"
                    header={<div>ShoppingList</div>}
                    footer={<div>2018/6/8</div>}
                    bordered
                    dataSource={LIST}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default ShoppingList;