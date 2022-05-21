function Greetings(props) {
    return (
        <div className="greetings">
        {props.lang === "fr" && 
        <p>Bonjour {props.name}</p>
      }
        {props.lang === "de" && 
        <p>Hallo {props.name}</p>
      }
        </div>

    );
  }

export default Greetings;