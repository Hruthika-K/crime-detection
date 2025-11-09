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
 *     summary: Create a new crime alert from an image
 *     description: Receives an image (as a data URI) and a timestamp from an external source (like app2) and adds it to the list of alerts.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 description: "A photo of the incident, as a data URI that must include a MIME type and use Base64 encoding."
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Alert created successfully
 *       400:
 *         description: Bad request, missing required fields
 *       500:
 *         description: Internal Server Error
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { imageUrl, timestamp } = body;

    // Basic validation
    if (!imageUrl || !timestamp) {
      return NextResponse.json({ message: 'Missing required fields: imageUrl and timestamp' }, { status: 400 });
    }

    const newAlert: CrimeAlert = {
      id: (alerts.length + 1).toString(),
      title: "New Alert Received",
      category: 'Other',
      description: "An incident was reported from an external source.",
      timestamp: new Date(timestamp),
      imageUrl: imageUrl,
      location: 'Unknown location',
      latitude: 0,
      longitude: 0,
    };

    // Add to our in-memory store
    alerts.unshift(newAlert);
    
    console.log('New alert received from app2:', newAlert);

    return NextResponse.json({ message: 'Alert created successfully', alert: newAlert }, { status: 201 });
  } catch (error) {
    console.error('Error processing new alert:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Internal Server Error', error: errorMessage }, { status: 500 });
  }
}
