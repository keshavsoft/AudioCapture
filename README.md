# Offline Voice-to-Text with Node.js (Windows)

This project records audio from the Windows microphone and converts it to text using **SoX + Whisper.cpp**, completely **offline**.

The program performs:

```
Microphone → SoX → voice.wav → Whisper.cpp → Text
```

No cloud APIs are required.

---

# 1. Prerequisites

Install the following tools before running the project.

## 1. Node.js

Download and install:

https://nodejs.org

Verify:

```
node -v
```

---

## 2. SoX (Audio Recorder)

Download:

https://sourceforge.net/projects/sox/files/sox/

Install and add SoX to **PATH**.

Verify installation:

```
sox --version
```

---

## 3. Build Whisper.cpp

Clone the repository:

```
git clone https://github.com/ggerganov/whisper.cpp
```

Enter the folder:

```
cd whisper.cpp
```

Build Whisper:

```
cmake -B build
cmake --build build --config Release
```

After build completes you will get:

```
build/bin/Release/whisper-cli.exe
```

---

# 4. Download Whisper Model

Download a model from:

https://huggingface.co/ggerganov/whisper.cpp

Recommended lightweight model:

```
ggml-tiny.en.bin
```

Place it in:

```
models/ggml-tiny.en.bin
```

---

# 5. Project Structure

Example project layout:

```
AudioCapture
│
├─ combined.js
├─ voice.wav
│
├─ Release
│   └─ whisper-cli.exe
│
└─ models
    └─ ggml-tiny.en.bin
```

---

# 6. Configure Microphone

Open **combined.js** and update the microphone device name if necessary:

Example:

```
Microphone Array (Intel® Smart Sound Technology for Digital Microphones)
```

You can find device names using Windows **Sound Settings → Recording Devices**.

---

# 7. Run the Application

Start the program:

```
node combined.js
```

You will see:

```
Recording... Press Ctrl+C to stop
```

Speak into the microphone.

Press:

```
Ctrl + C
```

Recording stops and Whisper transcribes the audio.

Example output:

```
Recording stopped
Transcribing...
TEXT: Hello, how are you? Good morning.
Done
```

---

# 8. How It Works

The script performs two steps.

## Step 1 – Record audio

```
sox -t waveaudio "Microphone Device Name" -r 16000 -c 1 voice.wav
```

This records microphone audio.

## Step 2 – Transcribe speech

```
whisper-cli.exe -m models/ggml-tiny.en.bin -f voice.wav --no-timestamps
```

Whisper converts the recorded audio to text.

---

# 9. Why This Approach

Advantages:

* Works **fully offline**
* No API keys required
* Fast local transcription
* Works with Node.js applications
* Can be integrated into **VS Code extensions**

---

# 10. Future Improvements

Possible next steps:

* Real-time speech streaming
* Automatic microphone detection
* Voice typing in VS Code editor
* Continuous speech recognition
* Command-based voice control

---

# 11. License

This project depends on:

* Whisper.cpp
* SoX

Please follow their respective licenses.
