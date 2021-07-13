import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background: var(--veryLightGrey);
`
export const FormWrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: 70px 1fr;
    background: var(--veryLightGrey);
    border: 1px solid var(--lightGrey);
    width: auto;
    padding: 30px;
    align-items: baseline;
    grid-gap: 10px;
  }

  button {
    margin-top: 10px;
    padding: 10px;
    grid-column: 2/3;
  }
  label {
    margin-right: 15px;
  }
`

export const List = styled.div`
  ul {
    margin: 0;
    margin-top: 20px;
    width: auto;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px 0px 20px;
    background: var(--veryLightGrey);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  span {
    margin-right: 10px;
    font-weight: 800;
  }
`
