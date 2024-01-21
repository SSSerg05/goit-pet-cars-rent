import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
// import { Loader } from "../Loader/Loader"

import { Container, } from "./Layout.styled.js";
import { Header } from 'components/Header/Header';


export const Layout = () => {

  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={
          <>
            <div>Loading...</div>
            {/* <Loader /> */}
          </> 
        }>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}