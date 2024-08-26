import { SpeechClient } from '@google-cloud/speech';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = new SpeechClient({
        keyFilename: path.join(process.cwd(), 'credentials.json')
      });
      //console.log('this is the client ==>>', client)
      const audioContent = req.body.audioContent;
      //console.log('this is the audioContent ==>>', audioContent)
      const [response] = await client.recognize({
        config: {
          encoding: 'WEBM_OPUS',  // Adjust if your audio has a different encoding
          languageCode: 'en-US',
          sampleRateHertz: 48000, // Uncomment and adjust if you know the sample rate
        },
        audio: {
          content: audioContent,
        },
      });
      console.log('this is the response ==>>', response)
      const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');

      res.status(200).json({ transcription });
    } catch (error) {
      console.error("Error transcribing audio:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
