import FooterC from "../components/FooterC";
import HeaderC from "../components/HeadrC";
import { Outlet } from "react-router-dom";
export default function defaultLayout() {
  return (
    <>
      <HeaderC></HeaderC>
      <Outlet></Outlet>
      <FooterC></FooterC>
    </>
  );
}
