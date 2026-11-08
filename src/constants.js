/**
 * LinkDrop Core Constants, Templates, and Module Definitions
 */

export const MODULE_TYPES = [
  { id: 'note', label: 'Simple text note', icon: 'FileText' },
  { id: 'divider', label: 'Large divider text', icon: 'Heading' },
  { id: 'itinerary', label: 'Schedule of events', icon: 'Calendar' },
  { id: 'expenses', label: 'Track who paid what', icon: 'DollarSign' },
  { id: 'attendees', label: 'Track attendees & RSVP', icon: 'Users' },
  { id: 'poll', label: 'Vote on options', icon: 'Vote' },
  { id: 'weather', label: 'Forecast snapshot', icon: 'CloudSun' }
];

export const STARTER_TEMPLATES = [
  {
    id: 'friday-dinner',
    title: 'Friday Dinner 🍕',
    description: 'Casual dinner hangout with pizza & drinks.',
    checklist: [],
    customFields: [
      {
        id: 'attendees-1',
        type: 'attendees',
        title: 'Who is coming?',
        attendees: []
      },
      {
        id: 'note-1',
        type: 'note',
        title: 'Food Orders',
        value: 'We are ordering 3 large pizzas and some wings. Please bring your own drinks!'
      },
      {
        id: 'expenses-1',
        type: 'expenses',
        title: 'Bill Splitter',
        expenses: []
      }
    ]
  },
  {
    id: 'road-trip',
    title: 'Road Trip 2026 🚗',
    description: 'Itinerary, costs, and checklist for the weekend trip.',
    checklist: [
      { id: 1, text: 'Pack sleeping bags and tents', done: false },
      { id: 2, text: 'Download offline Google Maps route', done: true }
    ],
    customFields: [
      {
        id: 'itinerary-1',
        type: 'itinerary',
        title: 'Road Trip Schedule',
        events: [
          { id: 1, time: '08:00 AM', title: 'Meetup at North Gas Station' },
          { id: 2, time: '12:30 PM', title: 'Scenic Lookout & Lunch Break' },
          { id: 3, time: '05:00 PM', title: 'Arrive at Campsite & Setup' }
        ]
      },
      {
        id: 'expenses-1',
        type: 'expenses',
        title: 'Fuel & Camp Fees',
        expenses: []
      }
    ]
  },
  {
    id: 'project-kickoff',
    title: 'Project Kickoff 🚀',
    description: 'Agenda, sprint goals, and resource links.',
    checklist: [
      { id: 1, text: 'Assign team leads and tasks', done: false },
      { id: 2, text: 'Finalize API specs and schemas', done: false }
    ],
    customFields: [
      {
        id: 'note-1',
        type: 'note',
        title: 'Agenda & Goals',
        value: '1. Introductions\n2. Roadmap Review\n3. Technical Q&A\n4. Next Steps'
      },
      {
        id: 'note-2',
        type: 'note',
        title: 'Meeting Link',
        value: 'https://zoom.us/j/123456789'
      }
    ]
  }
];

export const THEMES = [
  { id: 'default', name: 'Default Indigo', bg: 'bg-indigo-50 dark:bg-black', text: 'text-indigo-600' },
  { id: 'sunset', name: 'Warm Sunset', bg: 'bg-orange-50 dark:bg-[#1a0f0a]', text: 'text-orange-600' },
  { id: 'cyber', name: 'Cyber Blue', bg: 'bg-blue-50 dark:bg-[#020412]', text: 'text-blue-600' },
  { id: 'forest', name: 'Emerald Forest', bg: 'bg-emerald-50 dark:bg-[#021208]', text: 'text-emerald-600' },
  { id: 'neon', name: 'Neon Purple', bg: 'bg-purple-50 dark:bg-[#120211]', text: 'text-purple-600' }
];
