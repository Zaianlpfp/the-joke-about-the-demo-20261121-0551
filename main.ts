import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deterministic entry: the joke below is a fixed string.
// No network, no randomness, no timestamps — every run writes the same bytes.
const JOKE =
  "My agent demoed checkout in 12 seconds, ran 214 test orders, and charged my own card 214 times — I clapped anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
