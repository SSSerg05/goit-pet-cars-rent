import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Layout } from "./Layout";
import { Container } from "./App.styled";


export const App = () => {

  const HomePage = lazy(() => import('../../pages/HomePage'));
  const FavoritesPage = lazy(() => import('../../pages/FavoritesPage'));
  const CatalogPage = lazy(() => import('../../pages/CatalogPage'));


  return ( 
    <Container>
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element= {<HomePage />} />

          <Route 
            path="catalog" 
            element={ 
              <PublicRoute>
                <CatalogPage /> 
              </PublicRoute>
            }
          />
          
          <Route 
            path="favorites" 
            element={ 
              <PublicRoute>
                <FavoritesPage />
              </PublicRoute>
            }
          />
          
        </Route>
      </Routes>
    </Container>
  );
};

export default App
