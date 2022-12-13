import React from "react";
import {
  faGraduationCap,
  faAt,
  faLocationDot,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailedSubjectPage = () => {
  const parseSubject = (subject) => {};

  return (
    <div className="flex justify-end items.center h-screen w-screen">
      <div className=" flex flex-col justify-start items-center p-10 border border-white w-1/4 h-full">
        <h2>FRONTEND DEVELOPMENT</h2>
        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
        <p>Mateusz Miotk</p>
        <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
        <p>mateusz.miotk@ug.edu.pl</p>
        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
        <p>Sala</p>
        <FontAwesomeIcon icon={faHourglass}></FontAwesomeIcon>
        <p>Godziny</p>
        <p>Grupa</p>
      </div>
    </div>
  );
};

export default DetailedSubjectPage;
