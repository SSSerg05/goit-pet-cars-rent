import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMoonOutline, IoSunny } from 'react-icons/io5';
// redux
import { selectStatusTheme } from 'redux/theme/selectors';
import { setStatusTheme } from 'redux/theme/themeSlice';
// style
import { ThemeLink } from './Theme.styled'


export const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectStatusTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);

    const a = Array.from(document.querySelectorAll('a'));
    a.map(node => node.setAttribute('data-theme', theme))
    
  }, [theme]);

  
  const handleChangeTheme = () => {
    const overTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setStatusTheme(overTheme));
  };


  return (
    <ThemeLink onClick={ handleChangeTheme }>
      { (theme === 'light' && (
          <IoSunny size={24} />
        )) || (
          <IoMoonOutline size={24} />
        )
      }
    </ThemeLink>
  )

}