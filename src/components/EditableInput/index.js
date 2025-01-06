import {Component} from 'react'
import './index.css'

class EditableInput extends Component {
  state = {inputText: '', saveView: true}

  onChangeInputTest = event => {
    this.setState({inputText: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({
      saveView: !prevState.saveView,
    }))
  }

  onClickEdit = () => {
    this.setState(prevState => ({
      saveView: !prevState.saveView,
    }))
  }

  render() {
    const {inputText, saveView} = this.state
    return (
      <div className="app-container">
        <div className="editableInput-container">
          <h1 className="heading">Editable Text Input</h1>
          {saveView ? (
            <div className="inner-container">
              <input
                type="text"
                className="input"
                value={inputText}
                onChange={this.onChangeInputTest}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickSave}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="inner-container">
              <p className="inputText-style">{inputText}</p>
              <button
                type="button"
                className="button"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default EditableInput
