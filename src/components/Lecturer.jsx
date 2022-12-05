import React, { useState, useEffect } from "react";

function Lecturer() {
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

  function handleChange(e, i) {
    const updatedSchedule = [...schedule];
    updatedSchedule[i][e.target.name] = e.target.value;
    setSchedule(updatedSchedule);
  }
  useEffect(() => {
    const groups = schedule.reduce((acc, item) => {
      const group = item[filterBy];

      if (!acc[group]) {
        acc[group] = [item];
      } else {
        acc[group].push(item);
      }
      return acc;
    }, {});

    const groupNames = Object.keys(groups);
    setGroupElements(
      groupNames.map((groupName, j) => {
        const group = groups[groupName];
        const groupElements = group.map((item, i) => (
          <FormItem
            id={item.id}
            handleChange={handleChange}
            i={i}
            key={i}
            schedule={schedule}
          />
        ));
        return (
          <section key={j} className="mb-4">
            <h2 className="text-3xl font-bold">{groupName}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center grid-flow-row gap-4">
              {groupElements}
            </div>
          </section>
        );
      })
    );
  }, [filterBy, schedule]);

  return (
    <div className="mx-auto rounded md:w-fit m-3">
      <div className="w-fit mx-auto">
        <nav className="flex gap-5 border-2 rounded p-4">
          <button
            className="border-r-2 pr-4"
            onClick={() => setFilterBy("day")}
          >
            Day
          </button>
          <button
            className="border-r-2 pr-4"
            onClick={() => setFilterBy("group")}
          >
            Group
          </button>
          <button onClick={() => setFilterBy("course")}>Course</button>
        </nav>
      </div>
      <form className="">{groupElements}</form>
    </div>
  );
}

export default Lecturer;

const FormItem = ({ id, i, handleChange, schedule }) => {
  const item = schedule.find((i) => i.id === id);
  return (
    <div
      className="mt-5 mx-auto w-fit bg-secondaryLight dark:bg-secondaryDark dark:border-2 dark:border-primaryLight text-middle rounded-lg shadow p-6 flex-col flex justify-evenly align-center"
      key={i}
    >
      <label className="label" htmlFor={`day-${i}`}>
        Day
      </label>
      <input
        className="input"
        type="text"
        name="day"
        id={`day-${i}`}
        value={item.day}
        onChange={(e) => handleChange(e, i)}
      />
      <label className="label" htmlFor={`startTime-${i}`}>
        Time
      </label>
      <div className="flex flex-row">
        <input
          className="input"
          type="time"
          name="startTime"
          id={`startTime-${i}`}
          value={item.startTime}
          onChange={(e) => handleChange(e, i)}
        />
        <h1 className="text-xl mx-2 text-primaryLight">-</h1>
        <input
          className="input"
          type="time"
          name="endTime"
          id={`endTime-${i}`}
          value={item.endTime}
          onChange={(e) => handleChange(e, i)}
        />
      </div>
      <label className="label" htmlFor={`course-${i}`}>
        Course
      </label>
      <input
        className="input"
        type="text"
        name="course"
        id={`course-${i}`}
        value={item.course}
        onChange={(e) => handleChange(e, i)}
      />
      <label className="label" htmlFor={`group-${i}`}>
        Group
      </label>
      <input
        className="input"
        type="text"
        name="group"
        id={`group-${i}`}
        value={item.group}
        onChange={(e) => handleChange(e, i)}
      />
      <label className="label" htmlFor={`room-${i}`}>
        Room
      </label>
      <input
        className="input"
        type="text"
        name="room"
        id={`room-${i}`}
        value={item.room}
        onChange={(e) => handleChange(e, i)}
      />
      <label className="label" htmlFor={`additional-${i}`}>
        Additional Info
      </label>
      <input
        className="input"
        type="text"
        name="additional"
        id={`additional-${i}`}
        value={item.additional}
        onChange={(e) => handleChange(e, i)}
      />
    </div>
  );
};