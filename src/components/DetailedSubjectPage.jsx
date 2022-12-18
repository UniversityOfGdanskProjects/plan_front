import React from "react";
import {
  faGraduationCap,
  faAt,
  faLocationDot,
  faHourglass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailedSubjectPage = () => {
  const parseSubject = (subject) => {};

  return (
    <div className="flex justify-end items.center h-screen w-screen">
      <div className=" flex flex-col justify-start items-center p-10 border border-white w-1/4 h-full">
        <h2 className="text-2xl text-center pb-10">FRONTEND DEVELOPMENT</h2>
        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
        <p className="pb-4">Mateusz Miotk</p>
        <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
        <p className="pb-4">mateusz.miotk[at]ug.edu.pl</p>
        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
        <p className="pb-4">4.20</p>
        <FontAwesomeIcon icon={faHourglass}></FontAwesomeIcon>
        <p className="pb-4"> 10:15 - 12:45</p>
        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
        <p className="pb-2">gr. 4</p>
      </div>
    </div>
  );
};

export default DetailedSubjectPage;
