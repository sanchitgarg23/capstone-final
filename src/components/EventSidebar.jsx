


import React from 'react';
import { Clock, MapPin, Users, Plus } from 'lucide-react';

const EventSidebar = ({
  todayEvents,
  selectedDateEvents,
  selectedDate,
  onEventClick,
  onCreateEvent
}) => {
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'deadline': return 'bg-red-100 text-red-800';
      case 'task': return 'bg-green-100 text-green-800';
      case 'reminder': return 'bg-yellow-100 text-yellow-800';
      case 'personal': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const EventCard = ({ event }) => (
    <button
      onClick={() => onEventClick(event)}
      className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-gray-900 truncate flex-1">{event.title}</h4>
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
          {event.type}
        </span>
      </div>
      
      {event.description && (
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{event.description}</p>
      )}
      
      <div className="flex items-center space-x-4 text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span>
            {event.allDay ? 'All day' : `${formatTime(event.startDate)} - ${formatTime(event.endDate)}`}
          </span>
        </div>
      </div>
      
      {event.location && (
        <div className="flex items-center space-x-1 mt-1 text-xs text-gray-500">
          <MapPin className="h-3 w-3" />
          <span className="truncate">{event.location}</span>
        </div>
      )}
      
      {event.attendees && event.attendees.length > 0 && (
        <div className="flex items-center space-x-1 mt-1 text-xs text-gray-500">
          <Users className="h-3 w-3" />
          <span>{event.attendees.length} attendees</span>
        </div>
      )}
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Quick Create */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <button
          onClick={onCreateEvent}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 border-dashed border-gray-300 hover:border-gray-400 rounded-lg text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <Plus className="h-5 w-5" />
          <span className="font-medium">Create Event</span>
        </button>
      </div>

      {/* Today's Events */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Events</h3>
        {todayEvents.length === 0 ? (
          <div className="text-center py-6">
            <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">No events today</p>
          </div>
        ) : (
          <div className="space-y-3">
            {todayEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>

      {/* Selected Date Events */}
      {selectedDate && selectedDateEvents.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {formatDate(selectedDate)}
          </h3>
          <div className="space-y-3">
            {selectedDateEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
        <div className="space-y-2">
          {[...Array(7)].map((_, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);
            const dayEvents = selectedDateEvents.length > 0 ? [] : todayEvents.filter(event => {
              const eventDate = new Date(event.startDate);
              return eventDate.getDate() === date.getDate();
            });
            
            return (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">
                    {date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  {dayEvents.length} events
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventSidebar;
