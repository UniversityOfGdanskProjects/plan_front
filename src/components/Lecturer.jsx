import React, { useState } from 'react';

function Lecturer() {
  const [schedule, setSchedule] = useState([
    { day: 'Monday', startTime: '09:00', endTime: '10:45', course: 'Math 101', group: '1 P3', room: 'Room 101', addtitional: '' },
    { day: 'Tuesday', startTime: '10:00', endTime: '11:45', course: 'Physics 201', group: '1 P4', room: 'Room 201', addtitional: '' },
    { day: 'Wednesday', startTime: '11:00', endTime: '12:45', course: 'Computer Science 301', group: '2 P4', room: 'Room 301', addtitional: '' },
    { day: 'Thursday', startTime: '12:00', endTime: '13:45', course: 'Biology 401', room: 'Room 401', group: '2 P1', addtitional: '' },
    { day: 'Friday', startTime: '13:00', endTime: '14:45', course: 'Chemistry 501', room: 'Room 501', group: '1 P2', addtitional: '' },
  ]);

  function handleChange(e, i) {
    const updatedSchedule = [...schedule];
    updatedSchedule[i][e.target.name] = e.target.value;
    setSchedule(updatedSchedule);
  }

  return (
    <div className="container mx-auto  rounded md:w-fit m-3">
    <form className='grid md:grid-cols-2 lg:grid-cols-3 items-center grid-flow-row gap-4'>
        {schedule.map((item, i) => (
          <div className="mt-5 mx-auto w-fit bg-secondaryLight text-middle rounded-lg shadow p-6 flex-col flex justify-evenly align-center" key={i}>
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
            <div className='flex flex-row'>
              <input
                className="input"
                type="time"
                name="startTime"
                id={`startTime-${i}`}
                value={item.startTime}
                onChange={(e) => handleChange(e, i)}
              />
              <h1 className='text-xl mx-2 text-primaryLight'>-</h1>
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
        ))}
      </form>
    </div>
  );
}

export default Lecturer;

