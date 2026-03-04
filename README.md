# Node.js Microphone Capture (Windows)

A minimal Node.js example that records audio from the Windows microphone and saves it to a WAV file using **SoX**.

This project demonstrates:

* Accessing the Windows microphone
* Recording audio using Node.js
* Saving the recording as `voice.wav`

---

# 1. Requirements

You must install the following:

1. **Node.js**
   Download: https://nodejs.org

2. **SoX (Sound eXchange)**
   Download:
   https://sourceforge.net/projects/sox/files/sox/

Download the Windows version (example: `sox-14.4.2-win32.zip`)

---

# 2. Install SoX

1. Extract the zip file

Example location:

```
C:\Program Files (x86)\sox-14-4-2
```

2. Add this folder to the **Windows PATH**

Steps:

```
Start
→ Environment Variables
→ Edit system environment variables
→ Environment Variables
→ Path
→ New
→ paste the SoX folder path
```

3. Open a new terminal and test:

```
sox --version
```

Expected output:

```
SoX v14.4.2
```

---

# 3. Find Your Microphone Device Name

Run this command:

```
sox -V6 -n -t waveaudio dummy
```

Or test recording:

```
sox -t waveaudio "YOUR DEVICE NAME" test.wav
```

Example device name:

```
Microphone Array (Intel® Smart Sound Technology for Digital Microphones)
```

---

# 4. Project Setup

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/node-mic-recording.git
```

Enter the folder:

```
cd node-mic-recording
```

---

# 5. Update Device Name

Open `app.js`.

Replace this line with your microphone device name:

```
"Microphone Array (Intel® Smart Sound Technology for Digital Microphones)"
```

Your device name may be different.

---

# 6. Run the Application

Start recording:

```
node app.js
```

You will see:

```
Recording... Press Ctrl+C to stop
```

Speak into the microphone.

Stop recording with:

```
Ctrl + C
```

---

# 7. Output

After stopping, the file will be saved:

```
voice.wav
```

You can play it using any audio player.

---

# 8. Project Structure

```
project-folder
│
├─ app.js
├─ README.md
└─ voice.wav (generated after recording)
```

---

# 9. How It Works

The program runs the following SoX command internally:

```
sox -t waveaudio "Microphone Device Name" voice.wav
```

Pipeline:

```
Microphone
   ↓
Windows Audio System
   ↓
SoX
   ↓
Node.js
   ↓
voice.wav
```

---

# 10. License

MIT License
