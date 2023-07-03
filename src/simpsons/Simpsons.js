const Simpsons = (props) => {
  let {name, surname, age, gender, photo} = props;

  return (
      <div>
          <h1>{name} {surname}</h1>
          <h2>Age: {age}</h2>
          <h3>{gender}</h3>
          <img src={photo} alt="{name}"/>
      </div>
  );
};

export default Simpsons;