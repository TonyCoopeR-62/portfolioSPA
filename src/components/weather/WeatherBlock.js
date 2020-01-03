import React from 'react'

class WeatherBlock extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                dataFromApi: {},
                load: true,
                inputValue: 'Moscow',
                count: 0
            }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.requestToAPI()
    }

    componentDidUpdate() {
        this.requestToAPI()
    }

    handleClick() {
        const text = document.getElementById('search').value
        this.setState({
            inputValue: text,
            count: 0
        })     
    }

    requestToAPI() {
        if (this.state.count === 0) {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.inputValue + '&appid=8a103589621e12d36e9ffd2d7ee39848')
            .then(responce => responce.json())
            .then(result => {
                this.setState({
                        dataFromApi: result,
                        load: false,
                        count: 1
                    }
                )
            })
        }
    }

      
    //   .input {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     margin: 15px;
    //   }
      
    //   .text {
    //     border: 1px solid gray;
    //     border-radius: 8px;
    //     padding: 5px;
    //     outline: none;
    //   }
      
    //   .button {
    //     border-radius: 10px;
    //     margin-left: 20px;
    //   }
      
    //   .output {
    //     display: grid;
    //     grid-template-areas: 
    //     "icon temper"
    //     "city humidity";
    //     border-radius: 8px;
    //     box-shadow: 0 20px 40px 0 silver;
    //     align-items: center;
    //     padding: 20px;
    //     justify-items: center;
    //     background: linear-gradient(15deg, #ff626267, #6b2cff5b);
    //     font-size: 30px;
    //   }
      
    //   .city-name {
    //     grid-area: city;
    //   }
      
    //   .humidity {
    //     grid-area: humidity;
    //   }
      
    //   .temper {
    //     grid-area: temper;
    //   }
      
    //   .img-div {
    //     grid-area: icon;
    //   }

    render() {
        
    const main = {    
        
        'height':'350px',
        'font-family': 'Arial, sans-serif',
        'color': '#2c2c2cd3',
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content':'center',
        'align-items':'center',
        'margin': '0'
    }

    const input = {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'margin': '15px'
    }

    const text = {
        'border': '1px solid gray',
        'border-radius': '8px',
        'padding': '5px',
        'outline': 'none'
    }

    const button = {
        'border-radius': '10px',
        'margin-left': '20px'
    }

    const output = {
        'display': 'flex',
        'flex-direction': 'column',
        'border-radius': '8px',
        'width': '30%',
        'heigth': '100%',
        'box-shadow': '0 20px 40px 0 silver',
        'align-items': 'center',
        'padding': '20px',
        'justify-items': 'center',
        'background': 'linear-gradient(15deg, #ff626267, #6b2cff5b)',
        'font-size': '30px'
    }

        return (
            this.state.load ? <div style={main}><h1>Loading...</h1></div> :
            <div style={main}>
                <div style={input}>
                    <input type="search" placeholder="Input city..." style={text} id="search"/>
                    <input type="button" style={button} onClick={this.handleClick} value="Show weather"/>
                </div>
                <div style={output}>
                    <div><img src={'http://openweathermap.org/img/w/' + this.state.dataFromApi.weather[0].icon + '.png'} alt="weather" /></div>
                    <div>{Math.floor(this.state.dataFromApi.main.temp - 273)	+ '°C'} </div>
                    <div>{this.state.dataFromApi.main.humidity + '%'}</div>
                    <div>{this.state.dataFromApi.name}</div>
                </div>
            </div>
        )
    }
}

export default WeatherBlock