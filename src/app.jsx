import React, {Component} from 'react';
import Dashboard from './dashboard/dashboard.jsx';
import Calendar from './newCalendar/calendar';
import Money from './money/money.jsx';
import './index.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            // Possible views are: dashboard calendar money notes mail todos weather
            view: 'calendar',
        }
    }

    render() {
        const theme = createMuiTheme({
            palette: {
                type: 'dark',
            },
        });

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {this.getView()}
            </MuiThemeProvider>
        )
    }

    getView = () => {
        switch(this.state.view){
            case 'dashboard':
                return <Dashboard changeView={this.changeView}/>;
            case 'calendar':
                return <Calendar changeView={this.changeView}/>;
            case 'money':
                return <Money changeView={this.changeView}/>;
            default:
                return (
                    <h1>Don't know what view -- bug {this.state.view}</h1>
                );
        }
    };

    changeView = (newView) => {
        this.setState({view: newView});
    };
}

export default App;