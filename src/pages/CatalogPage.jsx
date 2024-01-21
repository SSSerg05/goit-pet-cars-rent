import { Cars } from 'components/Phonebook/Phonebook';
import { Section } from 'components/Section/Section';

export const CatalogPage = () => { 

  return(
    <Section title={"Cars Rent"}> 
      <Cars />
    </Section>
  )
}

export default CatalogPage