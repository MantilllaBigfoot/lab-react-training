function BoxColor(props) {
    return (
        <div className="boxcolor">
            <div className="boxcolor" 
            style={{backgroundColor: "rgb("+props.r+","+props.g+","+props.b+")"}}>
            </div>
        </div>

    );
  }

export default BoxColor;