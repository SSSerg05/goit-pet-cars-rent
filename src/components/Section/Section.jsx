import PropTypes from 'prop-types'; // ES6'
import { Title, SectionApp } from './Section.styled';


export const Section = ({ title, children }) => {
  return (
    <SectionApp>
      { title && <Title>{ title }</Title> }
      { children }
    </SectionApp>
  );
}

Section.propTypes = {
  title : PropTypes.string,
}