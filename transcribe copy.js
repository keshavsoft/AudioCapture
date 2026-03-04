import { spawn } from "child_process";
import path from "path";

const whisper = spawn("Release/whisper-cli.exe", [
    "-m",
    "models/ggml-tiny.en.bin",
    "-f",
    "voice.wav"
], {
    cwd: path.resolve("."),   // force correct working directory
    stdio: "inherit"
});

whisper.on("close", (code) => {
    //   console.log("Process finished:", code);
});

whisper.on("data", (data) => {
    const lines = data.toString().split("\n");

    lines.forEach(line => {
        if (line.includes("-->")) {
            const text = line.split("]").pop().trim();
            console.log("TEXT:", text);
        };
    });
});
