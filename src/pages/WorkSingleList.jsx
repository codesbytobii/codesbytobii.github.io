// components/WorkSingleList.jsx
import { caseStudies } from "../data/portfolio";
import WorkSingle from "./WorkSingle";

export default function WorkSingleList() {
  return (
    <>
      {caseStudies.map((caseStudy, index) => (
        <WorkSingle key={index} caseStudy={caseStudy} />
      ))}
    </>
  );
}