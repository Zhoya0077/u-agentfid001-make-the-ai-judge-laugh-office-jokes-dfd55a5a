// Office Jokes entry for make.fun — "Make the AI Judge Laugh: Office Jokes".
// Writes one single-line joke about office life to /output/entry.txt.
// The text is fixed: the program is deterministic, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I hit reply-all asking to be removed from the thread, and now I run a 400-person support group for people who hit reply-all.";

// Gate self-check: the competition requires UTF-8 text of 1 to 199
// characters, not only whitespace. Fail loudly instead of writing an
// entry the gate would refuse.
const length = [...JOKE].length;
if (length < 1 || length > 199 || JOKE.trim().length === 0) {
  throw new Error(`entry fails the gate: ${length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
