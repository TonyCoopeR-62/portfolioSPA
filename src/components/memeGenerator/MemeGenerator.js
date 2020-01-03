import React from 'react'

class MemeGenetator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            image: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: [] 
        }
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(responce => responce.json())
            .then(responce => {
                const {memes} = responce.data
                console.log(memes[0])
                this.setState({
                    allMemeImgs: memes
                })
            })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const int = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const newurl = this.state.allMemeImgs[int].url
        this.setState({
            image: newurl
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render () {

        const stylesMem = {
            meme: {
                'position': 'relative',
                'width': '90%',
                'margin': 'auto'
            },
            memeImg: {
                'width' : '100%',
                'box-shadow': '1px 8px 10px silver' 
            },
            memeH2: {
                'position': 'absolute',
                'width': '80%',
                'text-align': 'center',
                'left': '50%',
                'transform': 'translateX(-50%)',
                'margin': '15px 0',
                'padding': '0 5px',
                'font-family': 'Impact, sans-serif',
                'font-size': '2em',
                'text-transform': 'uppercase',
                'color': 'white',
                'letter-spacing': '1px',
                'text-shadow': '2px 2px 5px #000',
                'top': '0'
            },
            memeH2bottom: {
                'position': 'absolute',
                'width': '80%',
                'text-align': 'center',
                'left': '50%',
                'transform': 'translateX(-50%)',
                'margin': '15px 0',
                'padding': '0 5px',
                'font-family': 'Impact, sans-serif',
                'font-size': '2em',
                'text-transform': 'uppercase',
                'color': 'white',
                'letter-spacing': '1px',
                'text-shadow': '2px 2px 5px #000',
                'bottom': '0'
            },
            memeForm: {
                'width': '90%',
                'margin': '20px auto',
                'display': 'flex',
                'justify-content': 'space-between'
            },
            memeFormInput: {
                'width': '45%',
                'height': '40px',
                'margin': '0'
            },
            formButton: {
                'border': 'none',
                'font-size': '25px',
                'letter-spacing': '1.5px',
                'color': 'white',
                'background': '#6441a5'
            }

        }
        return (
            <>
            <div>
                <form style={stylesMem.memeForm} onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.topText} onChange={this.handleChange} placeholder="Top Text" name="topText" style={stylesMem.memeFormInput}/>
                    <input type="text" value={this.state.bottomText} onChange={this.handleChange} placeholder="Bottom Text" name="bottomText" style={stylesMem.memeFormInput}/>
                    <button style={stylesMem.formButton}>Gen</button>
                </form>
            </div>
            <div style={stylesMem.meme}>
                <img src={this.state.image} alt="" style={stylesMem.memeImg}/>
                <h2 style={stylesMem.memeH2}>{this.state.topText}</h2>
                <h2 style={stylesMem.memeH2bottom}>{this.state.bottomText}</h2>
            </div>
            </>
        )
    }
}

export default MemeGenetator