import { readFileStr, writeFileStr } from "https://deno.land/std/fs/mod.ts";
import { render } from "https://raw.github.com/srackham/rimu/master/mod.ts";

const [input = "./index.md", output = "./index.html"] = Deno.args;
const md = await readFileStr(input, { encoding: "utf8" });
await writeFileStr(output, render(md));
