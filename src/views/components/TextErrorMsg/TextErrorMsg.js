function TextErrorMsg (props) {
  const errorStyle = {
      fontSize: "14px",
      color: "#ff0000",
      marginTop: "6px"
  }
  return <div className='error' style={errorStyle}><i className="fad fa-exclamation-circle me-2"></i>{props.children}</div>
}

export default TextErrorMsg