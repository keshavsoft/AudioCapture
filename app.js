import { spawn } from "child_process";

const sox = spawn("sox", [
  "-t",
  "waveaudio",
  "Microphone Array (Intel® Smart Sound Technology for Digital Microphones)",
  "voice.wav"
]);

console.log("Recording... Press Ctrl+C to stop");

sox.stderr.on("data", (data) => {
  console.log(data.toString());
});

sox.on("close", (code) => {
  console.log("Recording finished", code);
});

process.on("SIGINT", () => {
  console.log("Stopping recording...");
  sox.kill("SIGINT");
});