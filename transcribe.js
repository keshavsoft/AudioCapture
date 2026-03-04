import { spawn } from "child_process";
import path from "path";

const whisper = spawn("Release/whisper-cli.exe", [
    "-m",
    "models/ggml-tiny.en.bin",
    "-f",
    "voice.wav",
    "--no-timestamps"
], {
    cwd: path.resolve(".")
});

whisper.stdout.on("data", (data) => {
    console.log("TEXT:", data.toString().trim());
});

whisper.on("close", (code) => {
    console.log("Finished:", code);
});