import { useSelector } from 'react-redux';
// redux
import { selectAuthetification } from 'redux/auth/selectors';
// components
import { UserMenu } from 'components/Header/UserMenu/UserMenu';
import { UserRegistration } from 'components/Header/UserRegistration/UserRegestraation';
// style
import { HeaderApp, Nav } from "./Header.styled";

export const Header = () => {
  const authetificated = useSelector(selectAuthetification);

  return (
    <HeaderApp>
      <Nav>
        {(authetificated && <UserMenu />) || <UserRegistration />}
      </Nav>
    </HeaderApp>
  )
}