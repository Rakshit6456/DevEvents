export type EventItem = {
    title: string;
    image: string;
    slug?: string;
    location?: string;
    date?: string;
    time?: string;
};
export const events: EventItem[] = [
  {
    image: '/images/event1.png',
    title: 'React Conference 2026',
    slug: 'react-conference-2026',
    location: 'Nalasupara, Mumbai',
    date: '11/03/2026',
    time: '11:00 AM - 1:00 PM'
  },
  {
    image: '/images/event2.png',
    title: 'Cloud Computing Summit',
    slug: 'cloud-computing-summit',
    location: 'Bengaluru, Karnataka',
    date: '22/04/2026',
    time: '9:00 AM - 5:00 PM'
  },
  {
    image: '/images/event3.png',
    title: 'DevCon 2026',
    slug: 'devcon-2026',
    location: 'Delhi, India',
    date: '15/05/2026',
    time: '10:00 AM - 4:00 PM'
  },
  {
    image: '/images/event4.png',
    title: 'Next.js Workshop',
    slug: 'nextjs-workshop',
    location: 'Hyderabad, Telangana',
    date: '30/06/2026',
    time: '2:00 PM - 6:00 PM'
  },
  {
    image: '/images/event5.png',
    title: 'AI & ML Conference',
    slug: 'ai-ml-conference',
    location: 'Bangalore, Karnataka',
    date: '10/07/2026',
    time: '10:00 AM - 4:00 PM'
  },
];