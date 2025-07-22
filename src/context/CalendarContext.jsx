
import React, { createContext, useContext, useState } from 'react';

const CalendarContext = createContext();

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};

export const CalendarProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Team Standup',
      description: 'Daily team standup meeting',
      startDate: new Date(2024, 11, 20, 9, 0),
      endDate: new Date(2024, 11, 20, 9, 30),
      type: 'meeting',
      color: '#3B82F6',
      allDay: false
    },
    {
      id: '2',
      title: 'Project Deadline',
      description: 'Final submission for Q4 project',
      startDate: new Date(2024, 11, 25, 0, 0),
      endDate: new Date(2024, 11, 25, 23, 59),
      type: 'deadline',
      color: '#EF4444',
      allDay: true
    },
    {
      id: '3',
      title: 'Design Review',
      description: 'Review new UI designs with stakeholders',
      startDate: new Date(2024, 11, 22, 14, 0),
      endDate: new Date(2024, 11, 22, 15, 30),
      type: 'meeting',
      color: '#8B5CF6',
      allDay: false
    }
  ]);

  const createEvent = (eventData) => {
    const newEvent = {
      ...eventData,
      id: Date.now().toString()
    };
    setEvents(prev => [...prev, newEvent]);
  };

  const updateEvent = (eventId, updates) => {
    setEvents(prev => prev.map(event =>
      event.id === eventId ? { ...event, ...updates } : event
    ));
  };

  const deleteEvent = (eventId) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const getEventsByDate = (date) => {
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return events.filter(event => {
      const eventDate = new Date(event.startDate.getFullYear(), event.startDate.getMonth(), event.startDate.getDate());
      return eventDate.getTime() === targetDate.getTime();
    });
  };

  const getEventsInRange = (startDate, endDate) => {
    return events.filter(event => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);
      return (eventStart >= startDate && eventStart <= endDate) ||
             (eventEnd >= startDate && eventEnd <= endDate) ||
             (eventStart <= startDate && eventEnd >= endDate);
    });
  };

  return (
    <CalendarContext.Provider value={{
      events,
      createEvent,
      updateEvent,
      deleteEvent,
      getEventsByDate,
      getEventsInRange
    }}>
      {children}
    </CalendarContext.Provider>
  );
};
