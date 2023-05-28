import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {value: 0}

  changeFunction = () => {
    this.setState(prevState => ({value: prevState.value + 1}))
  }

  render() {
    const {value} = this.state
    return (
      <div className="container">
        <div className="jana">
          <h1 className="head">Calculate the letters you entered</h1>
          <label htmlFor="jain" className="head">
            Enter the phrase
          </label>
          <input
            type="text"
            id="jain"
            className="head"
            placeholder="Enter the phrase"
            onChange={this.changeFunction}
          />
          <p1 className="para mini">No.of letters: {value}</p1>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
