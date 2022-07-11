import MainModal from "../MainModal/MainModal";
import FAQ from "./Faq";

export default function Aside() {
  return (
    <>
      <MainModal body={<FAQ />} buttonText="Explanation" />
      {/* <MainModal body={<FAQ />} buttonText="Glossary" /> */}
    </>
  );
}
