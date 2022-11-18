import {
  faCalendarDay,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  add,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
  startOfYear,
} from "date-fns";
import {
  eachDayOfInterval,
  eachMonthOfInterval,
  eachYearOfInterval,
  isSameYear,
} from "date-fns/esm";
import { pl, enUS } from "date-fns/locale";
import React, { useContext, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { LanguageContext } from "../App";

const Calendar = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const [monthsExpanded, setMonthsExpanded] = useState(false);
  const [yearsExpanded, setYearsExpanded] = useState(false);

  const langContext = useContext(LanguageContext);
  const lang = langContext("lang") == "pl" ? pl : enUS;
  const monthModal = useRef();
  const yearModal = useRef();

  useClickOutside(yearModal, () => {
    if (yearsExpanded) setYearsExpanded(false);
  });
  useClickOutside(monthModal, () => {
    if (monthsExpanded) setMonthsExpanded(false);
  });

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const months = eachMonthOfInterval({
    start: startOfYear(firstDayCurrentMonth),
    end: endOfYear(firstDayCurrentMonth),
  });
  const years = eachYearOfInterval({
    start: add(today, { years: -4 }),
    end: add(today, { years: 2 }),
  });

  const weekDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
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
      <div className="flex relative z-20 justify-between capitalize text-3xl mx-10 my-5">
        <h2 className="gap-4 flex">
          <div ref={monthModal} className="relative">
            <button
              onClick={() => setMonthsExpanded(!monthsExpanded)}
              className="capitalize hover:opacity-100 opacity-80"
            >
              {format(firstDayCurrentMonth, "MMM", { locale: lang })}
            </button>
            {monthsExpanded && (
              <div className="dropdown max-h-96 md:max-h-screen md:overflow-hidden overflow-auto border-2 border-secondaryLight dark:border-none flex flex-col absolute bg-secondaryLight dark:bg-secondaryDark dark:from-current dark:to-transparent text-primaryLight -left-2 dark:text-primaryLight rounded">
                {months.map((month) => (
                  <span
                    key={month}
                    className={
                      isSameMonth(month, today)
                        ? "bg-primaryLight text-secondaryLight dark:border-none outline-2 outline-secondaryLight dark:text-secondaryDark"
                        : "border-b-2 border-primaryLight last:border-none"
                    }
                  >
                    <button
                      onClick={() => {
                        setCurrentMonth(format(month, "MMM-yyyy"));
                        setMonthsExpanded(false);
                      }}
                      className="animate-none p-1 capitalize opacity-80 hover:opacity-100"
                    >
                      {format(month, "MMM", { locale: lang })}
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
          <div ref={yearModal} className="relative">
            <button
              onClick={() => setYearsExpanded(!yearsExpanded)}
              className="capitalize hover:opacity-100 opacity-80"
            >
              {format(firstDayCurrentMonth, "yyyy", { locale: lang })}
            </button>
            {yearsExpanded && (
              <div className="text-center dropdown border-2 border-secondaryLight dark:border-none flex flex-col absolute bg-secondaryLight dark:bg-secondaryDark text-primaryLight rounded -left-2">
                {years.map((year) => (
                  <span
                    key={year}
                    className={
                      isSameYear(year, today)
                        ? "bg-primaryLight text-secondaryLight dark:text-secondaryDark"
                        : "border-primaryLight border-b-2 last:border-none"
                    }
                  >
                    <button
                      onClick={() => {
                        setCurrentMonth(format(year, "MMM-yyyy"));
                        setYearsExpanded(false);
                      }}
                      className="animate-none p-1 capitalize opacity-80 hover:opacity-100"
                    >
                      {format(year, "yyyy", { locale: lang })}
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </h2>
        <div className="flex gap-4">
          <button onClick={() => setCurrentMonth(format(today, "MMM-yyyy"))}>
            <FontAwesomeIcon
              className="opacity-80 hover:opacity-100"
              icon={faCalendarDay}
            />
          </button>
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
      <div className="grid grid-cols-7 text-center gap-3 mb-3 relative z-10">
        {weekDays.map((day) => (
          <h3 key={day} className="capitalize">
            {format(day, "E", { locale: lang })}
          </h3>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center gap-3 relative z-10">
        {days.map((day) => (
          <div key={day.toString()} className="relative z-0">
            <button
              onClick={() => setSelectedDay(day)}
              type="button"
              className={`group w-10 h-10 rounded-full items-center flex justify-center mx-auto opacity-80 hover:opacity-100 transition-all ${
                isToday(day)
                  ? "dark:bg-primaryLight bg-secondaryLight text-primaryLight  dark:text-secondaryDark outline-primaryLight"
                  : ""
              }
              ${!isSameMonth(day, firstDayCurrentMonth) && "opacity-40"}
              ${
                isEqual(day, selectedDay) &&
                "outline outline-offset-0 dark:outline-primaryLight outline-secondaryLight"
              }`}
            >
              <div className="date-ring rounded-full absolute z-0 w-10 h-10 group-hover:outline-dashed group-hover:outline-secondaryLight dark:group-hover:outline-primaryLight outline-offset-0"></div>
              {format(day, "d", { locale: lang })}
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
