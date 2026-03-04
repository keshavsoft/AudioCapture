import { spawn } from "child_process";
import path from "path";

const whisper = spawn("Release/whisper-cli.exe", [
    "-m",
    "models/ggml-tiny.en.bin",
    "-f",
    "voice.wav",
    "-nt"
], {
    cwd: path.resolve(".")
});

whisper.stdout.on("data", (data) => {
    const lines = data.toString().split("\n");

    lines.forEach((line) => {
        if (line.includes("-->")) {
            const text = line.split("]").pop().trim();
            console.log("TEXT:", text);
        }
    });
});

whisper.stderr.on("data", (data) => {
    // optional: ignore logs or print them
});

whisper.on("close", (code) => {
    console.log("Finished:", code);
});