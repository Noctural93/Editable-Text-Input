import {Component} from 'react'
import {
  EditableTextContainer,
  EditableTextCard,
  TextHeading,
  InputContainer,
  InputEl,
  SaveButton,
  TextContainer,
  ParaEl,
  EditButton,
} from './styledComponents'

class EditableText extends Component {
  state = {
    text: '',
    isSaveClicked: false,
    isEditClicked: false,
  }

  onChangingInputEl = event => {
    this.setState({text: event.target.value})
  }

  onclickSave = () => {
    this.setState({isSaveClicked: true, isEditClicked: true})
  }

  onClickEdit = () => {
    this.setState({isEditClicked: false, isSaveClicked: false})
  }

  render() {
    const {text, isSaveClicked, isEditClicked} = this.state
    return (
      <EditableTextContainer>
        <EditableTextCard>
          <TextHeading>Editable Text Input</TextHeading>
          <InputContainer saveBtn={isSaveClicked}>
            <InputEl
              type="text"
              onChange={this.onChangingInputEl}
              value={text}
            />
            <SaveButton type="button" onClick={this.onclickSave}>
              Save
            </SaveButton>
          </InputContainer>
          <TextContainer editBtn={isEditClicked}>
            <ParaEl>{text}</ParaEl>
            <EditButton type="button" onClick={this.onClickEdit}>
              Edit
            </EditButton>
          </TextContainer>
        </EditableTextCard>
      </EditableTextContainer>
    )
  }
}
export default EditableText
