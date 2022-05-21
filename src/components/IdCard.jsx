function IdCard(props) {
    return (
        <div className="idcard">
        <p>{props.lastName}</p>
        <p>{props.firstName}</p>
        <p>{props.gender}</p>
        <p>{props.height}</p>
        <p>{props.birth.toLocaleDateString()    }</p>
        <img src={props.picture} alt="picture" />
        </div>

    );
  }

export default IdCard;