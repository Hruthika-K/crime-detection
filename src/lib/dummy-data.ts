export type CrimeAlert = {
  id: string;
  title: string;
  category: 'Theft' | 'Assault' | 'Vandalism' | 'Robbery' | 'Other';
  location: string;
  timestamp: Date;
  description: string;
  latitude: number;
  longitude: number;
};

export const dummyAlerts: CrimeAlert[] = [
  {
    id: '1',
    title: 'Suspicious Activity Reported',
    category: 'Other',
    location: 'Oak Street & 12th Avenue',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    description: 'A resident reported seeing an individual looking into car windows for an extended period. The individual was wearing a grey hoodie and carrying a backpack. Police were notified and are patrolling the area.',
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    id: '2',
    title: 'Package Theft from Porch',
    category: 'Theft',
    location: 'Maple Drive',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    description: 'A package was stolen from the front porch of a residence on Maple Drive. The incident was caught on a doorbell camera. The suspect is a male in his late 20s, wearing a blue jacket.',
    latitude: 34.0532,
    longitude: -118.2447,
  },
  {
    id: '3',
    title: 'Vandalism at City Park',
    category: 'Vandalism',
    location: 'Central City Park',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    description: 'Graffiti was discovered on the park\'s main fountain and several benches. Park services have been contacted for cleanup. Anyone with information is asked to contact the police.',
    latitude: 34.0512,
    longitude: -118.2427,
  },
  {
    id: '4',
    title: 'Attempted Car Break-in',
    category: 'Theft',
    location: 'Downtown Parking Garage, Level 3',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 28), // 28 hours ago
    description: 'A car alarm was triggered in the downtown parking garage. Security found a smashed window, but it appears nothing was stolen from the vehicle. The owner has been notified.',
    latitude: 34.0542,
    longitude: -118.2457,
  },
  {
    id: '5',
    title: 'Armed Robbery at Convenience Store',
    category: 'Robbery',
    location: 'Corner of 1st and Main',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    description: 'An armed robbery occurred at the convenience store. The suspect fled with an undisclosed amount of cash. No injuries were reported. Police are investigating.',
    latitude: 34.0500,
    longitude: -118.2400,
  },
  {
    id: '6',
    title: 'Noise Complaint',
    category: 'Other',
    location: '455 Pine Avenue',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 50), // 50 hours ago
    description: 'Loud music reported from an apartment unit after 11 PM. This is the third complaint this week from the same location. Authorities have been dispatched to address the situation.',
    latitude: 34.056,
    longitude: -118.249,
  }
];
