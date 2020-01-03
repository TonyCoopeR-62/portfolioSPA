import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/picsome/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import WeatherBlock from "./components/weather/WeatherBlock"
import MemeGenetator from './components/memeGenerator/MemeGenerator'

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>

                <Route path="/weatherblock">
                    <WeatherBlock />
                </Route>

                <Route path="/memegenerator">
                    <MemeGenetator />
                </Route>
            </Switch>
        </div>
    )
}

export default App