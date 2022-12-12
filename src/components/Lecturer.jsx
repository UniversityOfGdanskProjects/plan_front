import React, { useState, useEffect } from "react";
import { filterData } from "../utils/filterData";

const Lecturer = () => {
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      day: "Monday",
      startTime: "09:00",
      endTime: "10:45",
      course: "Math 101",
      group: "1 P3",
      room: "Room 101",
      addtitional: "",
    },
    {
      id: 2,
      day: "Tuesday",
      startTime: "10:00",
      endTime: "11:45",
      course: "Physics 201",
      group: "1 P4",
      room: "Room 201",
      addtitional: "",
    },
    {
      id: 3,
      day: "Wednesday",
      startTime: "11:00",
      endTime: "12:45",
      course: "Computer Science 301",
      group: "2 P4",
      room: "Room 301",
      addtitional: "",
    },
    {
      id: 4,
      day: "Friday",
      startTime: "09:00",
      endTime: "10:45",
      course: "Math 101",
      group: "1 P4",
      room: "Room 101",
      addtitional: "",
    },
    {
      id: 5,
      day: "Thursday",
      startTime: "12:00",
      endTime: "13:45",
      course: "Biology 401",
      room: "Room 401",
      group: "2 P1",
      addtitional: "",
    },
    {
      id: 6,
      day: "Friday",
      startTime: "13:00",
      endTime: "14:45",
      course: "Chemistry 501",
      room: "Room 501",
      group: "1 P2",
      addtitional: "",
    },
  ]);
  const [filterBy, setFilterBy] = useState("group");
  const [groupElements, setGroupElements] = useState([]);
  const [editableItems, setEditableItems] = useState([]);

  function handleChange(e, i) {
    const updatedSchedule = [...schedule];
    updatedSchedule[i][e.target.name] = e.target.value;
    updatedSchedule.forEach((item) => {
      if (editableItems.includes(item.id)) {
        item[e.target.name] = e.target.value;
      }
    });
    setSchedule(updatedSchedule);
  }

  const addToEditable = (id) => {
    if (!editableItems.includes(id)) {
      setEditableItems((prev) => [...prev, id]);
    }else{
      setEditableItems((prev) => prev.filter((i) => i !== id));
    }
  }

  useEffect(() => {
    setGroupElements(filterData(schedule, filterBy, {Component: FormItem, handleChange, addToEditable}));
  }, [filterBy, schedule]);

  return (
    <div className="mx-auto rounded md:w-fit m-3">
      <div className="w-fit mx-auto">
        <nav className="flex gap-5 border-2 border-secondaryLight dark:border-secondaryDark rounded p-4">
          <button
            className={`border-r-2 pr-4 border-secondaryLight p-2 dark:border-secondaryDark hover:underline ${
              filterBy === "day" && "underline"
            }`}
            onClick={() => setFilterBy("day")}
          >
            Day
          </button>
          <button
            className={`border-r-2 pr-4 border-secondaryLight p-2 dark:border-secondaryDark hover:underline ${
              filterBy === "group" && "underline"
            }`}
            onClick={() => setFilterBy("group")}
          >
            Group
          </button>
          <button
            onClick={() => setFilterBy("course")}
            className={`p-2 hover:underline ${
              filterBy === "course" && "underline"
            }`}
          >
            Course
          </button>
        </nav>
      </div>
      <form className="">{groupElements}</form>
    </div>
  );
};

export default Lecturer;
const InputItem = ({ name, handleChange, i, item, type="text", show_label=true, checked}) => {
  return (
    <>
    {show_label && <label className="capitalize label" htmlFor={`day-${i}`}>
      {name}
      </label>
    }
      <input
        disabled={!checked}
        className="input"
        type={type}
        name={name}
        id={`${name}-${i}`}
        value={item[name]}
        onChange={(e) => handleChange(e, i)}
      />
    </>
  );
};
const FormItem = ({ id, i, handleChange, schedule, addToEditable }) => {
  const item = schedule.find((i) => i.id === id);
  const [checked, setChecked] = useState(false);
  const onCheck = () => {
    setChecked(!checked);
    addToEditable(item.id);
  }
  return (
    <div
      className="mt-5 mx-auto w-fit bg-secondaryLight dark:bg-secondaryDark dark:border-2 dark:border-primaryLight text-middle rounded-lg shadow p-6 flex-col flex relative justify-evenly align-center"
      key={i}
    >
      <input type="checkbox" checked={checked} onChange={() => onCheck()} className="absolute top-2 right-2 border-none bg-primaryLight w-7 h-7 "></input>
      <InputItem name="day" handleChange={handleChange} i={i} item={item} checked={checked}/>
      <h1 className="text-primaryLight pl-2 text-lg font-bold">Time</h1>
      <div className="flex">
        <InputItem name={"startTime"} show_label={false} type="time" handleChange={handleChange} checked={checked} i={i} item={item}/>
        <h1 className="text-primaryLight m-2">-</h1>
        <InputItem name="endTime" type="time" show_label={false} handleChange={handleChange} checked={checked} i={i} item={item}/>
      </div>
      <InputItem name="course" handleChange={handleChange} i={i} item={item} checked={checked}/>
      <InputItem name="group" handleChange={handleChange} i={i} item={item} checked={checked}/>
      <InputItem name="room" handleChange={handleChange} i={i} item={item} checked={checked}/>
      <InputItem name="addtitional" handleChange={handleChange} i={i} item={item} checked={checked}/>
    </div>
  );
};
