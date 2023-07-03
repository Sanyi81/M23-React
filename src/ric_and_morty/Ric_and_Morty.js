const Character = (props) => {
    let {id, name, status, species, gender, image} = props;

    return (
        <div>
            <img src={image} alt="{name}"/>
            <h2>ID: {id}, Name: {name}</h2>
            <h3>Status: {status}</h3>
            <h3>Species: {species}</h3>
            <h4>{gender}</h4>
        </div>
    )
};

export default Character;