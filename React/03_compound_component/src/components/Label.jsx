const Label = (props) => {
    const labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        margin: 0,
        paddingLeft: 60,
        paddingTop: 15
    }

    return (
        <p style={labelStyle} onClick={props.onColorChange}>{props.color}</p>
    )
}

export default Label;