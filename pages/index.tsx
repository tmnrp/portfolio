import type { NextPage } from "next";
import { Main } from "../modules/main/Main";
import { Header } from "../modules/Header";

//
const Portfolio: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

//
export default Portfolio;
