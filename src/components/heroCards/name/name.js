import './name.scss';

const Name = (props) => {
  return (
    <div 
      className="name"
    >
      {props.name}
    </div>
  )
}

export default Name;