import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isEditable: true, inputValue: ''}

  userInput = event => {
    this.setState({inputValue: event.target.value})
  }

  toggleMode = () => {
    const {isEditable} = this.state
    console.log(isEditable)
    this.setState({isEditable: !isEditable})
  }

  render() {
    const {isEditable, inputValue} = this.state
    console.log(isEditable)
    return (
      <div className="main-div">
        <div className="sub-div">
          <h1>Editable text Input</h1>
          <div>
            {isEditable ? (
              <>
                <input
                  type="text"
                  value={inputValue}
                  onChange={this.userInput}
                />
                <button type="button" onClick={this.toggleMode}>
                  Save
                </button>
              </>
            ) : (
              <>
                <p>{inputValue}</p>
                <button type="button" onClick={this.toggleMode}>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
