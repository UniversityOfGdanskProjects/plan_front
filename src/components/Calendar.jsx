import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  add,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { eachDayOfInterval } from "date-fns/esm";
import { pl } from "date-fns/locale";
import React, { useState } from "react";

const Calendar = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  console.log(firstDayCurrentMonth);

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const NextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const PrevMonth = () => {
    let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, "MMM-yyyy"));
  };

  return (
    <div aria-label="Calendar" className="md:w-[60%]">
      <div className="flex justify-between capitalize text-3xl mx-10 my-5">
        <h2>{format(firstDayCurrentMonth, "MMM yyyy", { locale: pl })}</h2>
        <div className="flex gap-4">
          <button onClick={PrevMonth}>
            <FontAwesomeIcon
              className="opacity-80 hover:opacity-100"
              icon={faChevronLeft}
            />
          </button>
          <button onClick={NextMonth}>
            <FontAwesomeIcon
              className="opacity-80 hover:opacity-100"
              icon={faChevronRight}
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 text-center gap-3 mb-3">
        <h3>PN</h3>
        <h3>WT</h3>
        <h3>ŚR</h3>
        <h3>CZ</h3>
        <h3>PT</h3>
        <h3>SB</h3>
        <h3>ND</h3>
      </div>
      <div className="grid grid-cols-7 text-center gap-3">
        {days.map((day) => (
          <div key={day.toString()} className="relative">
            <button
              onClick={() => setSelectedDay(day)}
              type="button"
              className={`group relative w-10 h-10 rounded-full items-center flex justify-center mx-auto opacity-80 hover:opacity-100 transition-all ${
                isToday(day)
                  ? "dark:bg-primaryLight bg-secondaryLight text-primaryLight  dark:text-secondaryDark outline-primaryLight"
                  : ""
              }
              ${!isSameMonth(day, firstDayCurrentMonth) && "opacity-40"}
              ${
                isEqual(day, selectedDay) &&
                "outline dark:outline-primaryLight outline-secondaryLight"
              }`}
            >
              <div className="date-ring rounded-full absolute w-10 h-10 group-hover:outline-dashed group-hover:outline-primaryLight outline-offset-1"></div>
              {format(day, "d", { locale: pl })}
              <div className="hidden absolute right-1 top-2 bg-emerald-500 w-1 h-1 rounded-full"></div>
              <div className="hidden absolute right-2 top-2 bg-rose-500 w-1 h-1 rounded-full"></div>
              <div className="hidden absolute right-2 top-1 bg-cyan-500 w-1 h-1 rounded-full"></div>
              <div className="hidden absolute right-1 top-1 bg-fuchsia-500 w-1 h-1 rounded-full"></div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
