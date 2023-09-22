import "./Card.css";

// компонент для передачи стилей внитри Card???

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;