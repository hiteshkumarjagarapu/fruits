import {component} from 'react'
import './index.css'

class FruitsCounter extends component {
  state = {count: 0, counter: 0}

  mango = () => {
    const {count} = this.state
    this.setState(prev => ({count: prev.count + 1}))
  }

  banana = () => {
    const {counter} = this.state

    this.setState(prev => ({count: prev.counter + 1}))
  }
  render() {
    const {count, counter} = this.state
    return (
      <div className="bg">
        <div className="bg1">
          <h1>
            Bob ate<span className="c">{count}</span> mangoes
            <span className="c">{counter}</span> bananas
          </h1>
          <div className="imgdiv">
            <div>
              <img
                className="manban"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
            </div>
            <div>
              <button type="button" className="but" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
          </div>
          <div className="imgdiv">
            <div>
              <img
                className="manban"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
            </div>
            <div>
              <button type="button" className="but" onClick={this.banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
