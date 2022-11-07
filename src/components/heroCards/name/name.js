import './name.scss';

const Name = (props) => {
  return (
    <p 
      className="name"
    >
      {props.name}
    </p>
  )
}

export default Name;