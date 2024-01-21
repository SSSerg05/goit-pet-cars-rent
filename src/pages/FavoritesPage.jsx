import { Cars } from 'components/Cars/Cars';
import { Section } from 'components/Section/Section';

export const FavoritesPage = () => { 

  return(
    <Section title={"Favorite Cars"}> 
      <Cars />
    </Section>
  )
}

export default FavoritesPage