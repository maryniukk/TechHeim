import { Link } from 'react-router-dom'
import img from '../../../img/logo.jpg'
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={img} alt="logo" />
      </Link>
    </div>
  )
}
export default Logo
