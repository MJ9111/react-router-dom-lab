import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mail">Mail Boxes</Link>
        </li>
        <li>
          <Link to="/mail/new">New Mailbox</Link>
        </li>
     
      </ul>
    </nav>
  )
}

export default NavBar