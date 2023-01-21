// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onDarkMode = () => {
    this.setState({isDarkMode: false})
  }

  onLightMode = () => {
    this.setState({isDarkMode: true})
  }

  render() {
    const {isDarkMode} = this.state

    return (
      <div className="bg-container">
        <div className="light-dark-mode-container1">
          <h1 className="main-heading">Click to Change Mode</h1>
          <div className="button-container">
            {isDarkMode && (
              <button
                className="button1"
                type="button"
                onClick={this.onDarkMode}
              >
                {' '}
                Light Mode
              </button>
            )}

            {!isDarkMode && (
              <button
                className="button2"
                type="button"
                onClick={this.onLightMode}
              >
                {' '}
                Dark Mode
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
