import { ChangeEventHandler, CSSProperties, FC, Fragment } from "react";

interface InputProps {
  error?: string,
  style?: CSSProperties,
  errorStyle?: CSSProperties,
  id: string,
  type?: string,
  placeholder?: string, 
  onChange: ChangeEventHandler,
  required?: boolean,
  value?: any,
  accept?: string,
  multiple?: boolean,
  disabled?: boolean,
  label?: boolean,
  className?: string,
  errorClassName?: string,
  min?: number,
  max?: number,
  step?: number,
}

export interface fileQuery {
  file?: File,
  url: string,
}

interface Styles { 
  input: CSSProperties,
  label: CSSProperties,
  container: CSSProperties,
  inputError: CSSProperties,
  error: CSSProperties,
}

const defaultStyles: Styles = {
  input: {
    color: "#000",
    backgroundColor: "#eee",
    padding: 5,
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    flex:1,
    height: "auto",
    minWidth: '100px',
    borderRadius: '0.75rem',
    margin: ".50rem .5rem .5rem 0px"
  },
  label: {
    textAlign: "left",
    margin: "0 0.50rem",
    fontWeight: 'bold',
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  inputError: {
    color: "#000",
    backgroundColor: "#eee",
    padding: 5,
    fontSize: 18,
    borderColor: "red",
    borderWidth: 2,
    width: "60%",
    height: "auto",
    flex: 1,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 3,
    paddingLeft: 5,
  },
}

const Input: FC<InputProps> = (props) => {

  const inputType = props.type || 'text'

  const inputPropsStyle = 
    props.error ? 
    {...props.errorStyle} :
    {...props.style} 
  
  const inputStyle = {
    ...defaultStyles.input, 
    ...inputPropsStyle
  }

  if (inputType === "file") {
    inputStyle.color = 'transparent'
  }

  const input = (
    <input 
      style={{...inputStyle, ...props.style}}
      className={ props.error ? 
        props.errorClassName
        :
        props.className
      }
      id={props.id}
      type={inputType}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.disabled}
      value={props.value}
      accept={props.accept}
      multiple={props.multiple}
      disabled={props.disabled}
      min={props.min}
      max={props.max}
      step={props.step}
    />
  )

  const errorLabel = <p style={defaultStyles.error}>{props.error}</p>

  if (props.label) {
    return (
      <Fragment>
        <div style={defaultStyles.container}>
          <label htmlFor={props.id} style={defaultStyles.label}>{props.label}</label>
          {input}
        </div>
        {props.error ? errorLabel : null}
      </Fragment>
    )
  }

  return (
    <Fragment>
      {input}
      {props.error ? errorLabel : null}
    </Fragment>
  )
}

export default Input