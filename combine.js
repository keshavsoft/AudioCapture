import { spawn } from "child_process";
import path from "path";

const device =
    "Microphone Array (Intel® Smart Sound Technology for Digital Microphones)";

const audioFile = "voice.wav";

console.log("Recording... Press Ctrl+C to stop");

/* ---------- RECORD AUDIO ---------- */

const sox = spawn("sox", [
    "-t",
    "waveaudio",
    device,
    "-r",
    "16000",
    "-c",
    "1",
    audioFile
]);

process.on("SIGINT", () => {
    console.log("\nRecording stopped");

    sox.kill("SIGINT");

    /* ---------- TRANSCRIBE ---------- */

    console.log("Transcribing...");

    const whisper = spawn(
        "Release/whisper-cli.exe",
        [
            "-m",
            "models/ggml-tiny.en.bin",
            "-f",
            audioFile,
            "--no-timestamps"
        ],
        { cwd: path.resolve(".") }
    );

    whisper.stdout.on("data", (data) => {
        console.log("TEXT:", data.toString().trim());
    });

    whisper.on("close", () => {
        console.log("Done");
    });
});