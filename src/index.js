import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, HashRouter, Switch} from 'react-router-dom';
import './index.css';
import { Button , Menu , Icon , Layout} from 'antd'
import 'antd/dist/antd.css';
import ShoppingList from './List/ShoppingList';
import Reminder from './Card/Reminder';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
    constructor() {
        super();
        this.state = {
            str:'Button'
        };
    }
    render() {
        return (
            <div>
                <Nav />
                <Main />
            </div>
        )
    }
};

class Home extends Component {
    render() {
        return (
            <div>
                <h3>welcome use this system!</h3>
            </div>
        )
    }
};

class Nav extends Component {
    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} style={{ width: 256 }} defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to='/' replace><Icon type="home" />Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/List' replace><Icon type="bars" />ShoppingList</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/Reminder' replace><Icon type="credit-card" />Reminder</Link> 
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
};

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/List' component={ShoppingList}/>
                    <Route path='/Reminder' component={Reminder}/>
                </Switch>
            </div>
        )
    }
};

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, document.getElementById('root'));