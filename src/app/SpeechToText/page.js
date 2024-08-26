'use client';

import { useEffect, useRef, useState } from 'react';

const SpeechRecognition = () => {
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    const recognize = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.start();

        let audioChunks = [];
        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioBuffer = await audioBlob.arrayBuffer();
          const audioContent = btoa(String.fromCharCode(...new Uint8Array(audioBuffer)));

          const response = await fetch('/api/SpeechToTextAPI/route', {
            method: 'POST',         
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ audioContent }),
          });

          const data = await response.json();
          setTranscript(data.transcription);
        };

        setTimeout(() => mediaRecorder.stop(), 5000); // Record for 5 seconds
      } catch (err) {
        console.error('Error accessing microphone:', err);
      }
    };

    recognitionRef.current = recognize;
  }, []);

  const handleSpeechRecognition = () => {
    recognitionRef.current();
  };

  return (
    <div>
      <button style = {{backgroundColor:'blue', color:'white', borderRadius:'5px', padding:'1px'}} onClick={handleSpeechRecognition}>Start Speech Recognition</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRecognition;
