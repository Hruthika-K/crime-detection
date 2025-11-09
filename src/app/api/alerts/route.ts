'use server';

import { NextResponse } from 'next/server';
import type { CrimeAlert } from '@/lib/dummy-data';
import { dummyAlerts } from '@/lib/dummy-data';

// In-memory store for alerts. In a real app, you'd use a database.
let alerts: CrimeAlert[] = [...dummyAlerts];

/**
 * @swagger
 * /api/alerts:
 *   get:
 *     summary: Retrieve a list of crime alerts
 *     description: Returns a list of all crime alerts, sorted by most recent.
 *     responses:
 *       200:
 *         description: A JSON array of crime alerts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CrimeAlert'
 */
export async function GET() {
  const sortedAlerts = alerts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  return NextResponse.json(sortedAlerts);
}

/**
 * @swagger
 * /api/alerts:
 *   post:
 *     summary: Create a new crime alert
 *     description: Receives alert data from an external source (like app2) and adds it to the list of alerts.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewCrimeAlert'
 *     responses:
 *       201:
 *         description: Alert created successfully
 *       400:
 *         description: Bad request, missing required fields
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, location, description, latitude, longitude, imageUrl } = body;

    // Basic validation
    if (!title || !category || !location || !description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newAlert: CrimeAlert = {
      id: (alerts.length + 1).toString(),
      title,
      category,
      location,
      description,
      timestamp: new Date(),
      latitude: latitude || 0,
      longitude: longitude || 0,
      imageUrl: imageUrl || ''
    };

    // Add to our in-memory store
    alerts.unshift(newAlert);
    
    console.log('New alert received from app2:', newAlert);

    return NextResponse.json({ message: 'Alert created successfully', alert: newAlert }, { status: 201 });
  } catch (error) {
    console.error('Error processing new alert:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
