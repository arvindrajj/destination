import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination
  return (
    <li className="destination-container">
      <img src={imgUrl} alt={name} className="img" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
