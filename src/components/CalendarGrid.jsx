


import React from 'react';
import "./CalendarGrid.css"
// view (Object): An object that must contain a date property. This date (a JavaScript Date object) determines which month and year the calendar grid should display.

// events (Array): An array of event objects. Each event object is expected to have properties like id, title, startDate (a Date object), allDay (a boolean), and color (a string for styling)

// onDateClick (Function): A callback function that gets executed when a user clicks on a day cell. It passes the Date object for the clicked day back to the parent component.


// onEventClick (Function): A callback function that gets executed when a user clicks on a specific event. It passes the clicked event object back to the parent component.

// selectedDate (Date): A Date object representing the currently selected date. The component uses this to apply a special highlight style to that day.
const CalendarGrid = ({
  view,
  // Ye batata hai ki calendar kis mahine ka dikhaana hai.
  events,
  // Har date ke liye associated events hoti hain eg :

  // events = [
  // { id: 1, title: "Meeting", startDate: new Date(), allDay: false, color: "#f00" }
//    ]

  onDateClick,
  onEventClick,
  selectedDate
}) => {


  // Calculates Month Boundaries: It determines the first day, last day, and total number of days in the provided month.
  // Fills Previous Month's Days: Calendars often show the last few days of the previous month to fill the grid's first week. This part of the function calculates and adds those "grayed out" days to the beginning of the days array.

// Fills Current Month's Days: It then loops from 1 to the total number of days in the current month, adding each day to the days array

// Fills Next Month's Days: To ensure the grid is always a consistent size (6 rows x 7 columns = 42 cells), it calculates how many days are needed from the next month to fill the remaining cells and adds them to the end of the days array.
// Returns Data Structure: It returns an array of objects, where each object contains a date (a Date object) and a boolean isCurrentMonth flag.

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevDate = new Date(year, month, -startingDayOfWeek + i + 1);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    
    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ date: new Date(year, month, day), isCurrentMonth: true });
    }
    
    // Add empty cells for days after the last day of the month
    const remainingCells = 42 - days.length; // 6 rows × 7 days
    for (let i = 1; i <= remainingCells; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({ date: nextDate, isCurrentMonth: false });
    }
    
    return days;
  };


// For any given day, this function filters the main events prop to find only the events that fall on that specific date. It compares the year, month, and day, ignoring the time part of the Date objects.
  const getEventsForDate = (date) => {
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    // events array ko filter karke dikhata hai ki har date pe kaunse events hain.
    return events.filter(event => {
      const eventDate = new Date(event.startDate.getFullYear(), event.startDate.getMonth(), event.startDate.getDate());
      return eventDate.getTime() === targetDate.getTime();
    });
  };


  
// isToday(date) & isSelected(date)
// These are simple utility functions that check if a given date is the current date ("today") or the selectedDate passed in via props. They are used for conditional styling.


  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };
// A formatting utility that takes a Date object and returns a human-readable time string (e.g., "2:30 PM").
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

// view.date se month/year milta hai → grid generate hoti hai.
  const days = getDaysInMonth(view.date);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (

    <div className="calendar-container">
      {/* Week Day Headers */}
      <div className="week-day-headers">
        {weekDays.map((day) => (
          <div key={day} className="week-day-header">
            <span className="week-day-header-text">{day}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {days.map((day, index) => {
          const dayEvents = getEventsForDate(day.date);
          const isCurrentMonth = day.isCurrentMonth;
          const isTodayDate = isToday(day.date);
          const isSelectedDate = isSelected(day.date);

          // Dynamically build the className string
          let dayCellClasses = 'day-cell';
          if (!isCurrentMonth) dayCellClasses += ' day-cell-inactive';
          if (isSelectedDate) dayCellClasses += ' day-cell-selected';

          let dateNumberClasses = 'date-number';
          if (isTodayDate) {
            dateNumberClasses += ' date-number-today';
          } else if (!isCurrentMonth) {
            dateNumberClasses += ' date-number-inactive';
          }

          return (
            <div
              key={index}
              onClick={() => onDateClick(day.date)}
              className={dayCellClasses}
            >
              {/* Date Number */}
              <div className="day-cell-header">
                <span className={dateNumberClasses}>
                  {day.date.getDate()}
                </span>
                {dayEvents.length > 3 && (
                  <span className="more-events">+{dayEvents.length - 3}</span>
                )}
              </div>

              {/* Events */}
              <div className="events-container">
                {dayEvents.slice(0, 3).map((event) => (
                  <button
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick(event);
                      // Jab user kisi specific event pe click kare, tum us event ki full info parent component me use kar sakte ho.
                    }}
                    className="event-button"
                    style={{ backgroundColor: event.color + '20', color: event.color }}
                  >
                    <div className="event-title">{event.title}</div>
                    {!event.allDay && (
                      <div className="event-time">
                        {formatTime(event.startDate)}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;