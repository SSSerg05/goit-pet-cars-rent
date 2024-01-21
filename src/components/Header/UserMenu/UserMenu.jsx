
import { List, Link, } from "./UserMenu.styled";


export const UserMenu = () => {

  return (
    <>
      <List>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
      </List>
      
    </>
  )
}