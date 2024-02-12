import styled from 'styled-components'

export const EditableTextContainer = styled.div`
  min-height: 100vh;
  background-color: #f5d0fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EditableTextCard = styled.div`
  height: 230px;
  width: 370px;
  background-color: #ffffff;
  border: 0 solid grey;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const TextHeading = styled.h1`
  margin-top: 0;
  font-size: 29px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: ${props => (props.saveBtn ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: space-evenly;
`

export const InputEl = styled.input`
  height: 29px;
  width: 230px;
  border: 1px solid #cbd2d9;
  border-radius: 3px;
  color: #323f4b;
  outline: none;
`

export const SaveButton = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  font-size: 12px;
  padding: 8px 12px 8px 12px;
  border: 0 solid grey;
  border-radius: 4px;
`

export const TextContainer = styled.div`
  width: 100%;
  display: ${props => (props.editBtn ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-evenly;
`

export const ParaEl = styled.p`
  color: #323f4b;
  margin-top: auto;
  margin-bottom: auto;
`

export const EditButton = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  font-size: 12px;
  padding: 8px 18px 8px 18px;
  border: 0 solid grey;
  border-radius: 4px;
`
