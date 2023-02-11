'use client';
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      {/* <Main /> */}
      <Footer />
    </ChakraProvider>
  )
}
