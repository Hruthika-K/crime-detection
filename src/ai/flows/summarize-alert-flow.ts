'use server';
/**
 * @fileOverview An AI flow to summarize a crime alert from an image.
 *
 * - summarizeAlert - A function that handles the alert summarization process.
 * - SummarizeAlertInput - The input type for the summarizeAlert function.
 * - SummarizeAlertOutput - The return type for the summarizeAlert function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const SummarizeAlertInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a potential crime or incident, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SummarizeAlertInput = z.infer<typeof SummarizeAlertInputSchema>;

const SummarizeAlertOutputSchema = z.object({
  title: z.string().describe('A short, descriptive title for the incident (e.g., "Graffiti on Wall", "Car Window Smashed").'),
  description: z.string().describe('A one or two-sentence description of what is happening in the image.'),
  category: z.enum(['Theft', 'Assault', 'Vandalism', 'Robbery', 'Other']).describe('The most appropriate category for the incident shown in the image.'),
});
export type SummarizeAlertOutput = z.infer<typeof SummarizeAlertOutputSchema>;


const prompt = ai.definePrompt({
  name: 'summarizeAlertPrompt',
  input: {schema: SummarizeAlertInputSchema},
  output: {schema: SummarizeAlertOutputSchema},
  prompt: `You are a crime scene analyst. Your task is to analyze the provided image and generate a concise summary for a community crime alert system. Based on the image, determine a title, a brief description, and a category for the incident.

Image: {{media url=photoDataUri}}`,
});

export async function summarizeAlert(input: SummarizeAlertInput): Promise<SummarizeAlertOutput> {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error('Failed to get a summary from the AI model.');
    }
    return output;
}
