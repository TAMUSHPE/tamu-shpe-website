'use client';

import FullCalendar from '@fullcalendar/react';
import { EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { useState } from 'react';
import './Calendar.css';
import Link from 'next/link';

interface CalendarEvent {
  title: string;
  start: Date;
  end?: Date;
}

export default function Calendar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const openModal = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="flex w-full items-center justify-center min-h-96 py-5 rounded-lg border-gray-400 border-2">
      <div className="flex flex-col w-11/12">
        <Link
          href="https://calendar.google.com/calendar/u/0?cid=anBzbzFuZ2lqMXNmcnExYzE5aDRocmdzbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          className="hover:opacity-90 place-self-end bg-[#500000] mb-2 px-3 py-2 rounded-lg text-white drop-shadow-md"
        >
          Add Google Calendar
        </Link>
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView={'dayGridMonth'}
          height={'auto'}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
          googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          eventClick={(info: EventClickArg) => {
            openModal({
              title: info.event.title,
              start: info.event.start || new Date(),
              end: info.event.end || undefined,
            });
            info.jsEvent.preventDefault();
          }}
          eventSources={[
            {
              googleCalendarId: 'tamushpe@gmail.com',
              backgroundColor: '#ff291a',
              borderColor: '#ff291a',
            },
            {
              googleCalendarId: 'p19dmac1ih22so1f44adj7uc48@group.calendar.google.com',
            },
            {
              googleCalendarId: 'qseipl2jkfh4kd1jimnk0e3600@group.calendar.google.com',
              backgroundColor: '#C1E1C1',
              borderColor: '#C1E1C1',
            },
            {
              googleCalendarId: 'otmmlpi343epdcvioo9k5nu0q0@group.calendar.google.com',
            },
            {
              googleCalendarId: 'jpso1ngij1sfrq1c19h4hrgsm8@group.calendar.google.com',
              backgroundColor: '#21ADA8',
              borderColor: '#21ADA8',
            },
          ]}
        />
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg z-10">
            {selectedEvent && (
              <div className="flex flex-col pb-8 gap-2">
                <button onClick={closeModal} className="ml-auto px-3 py-1 bg-[#500000] text-white rounded">
                  X
                </button>
                <h2 className="text-xl font-bold">{selectedEvent.title}</h2>
                <p className="mb-2==">Start: {selectedEvent.start.toLocaleString()}</p>
                {selectedEvent.end && <p>End: {selectedEvent.end.toLocaleString()}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
