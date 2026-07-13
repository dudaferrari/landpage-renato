import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const noJekyllPath = resolve(process.cwd(), "dist", ".nojekyll");

await writeFile(noJekyllPath, "", "utf8");