import { readFileStr, writeFileStr } from "https://deno.land/std/fs/mod.ts";
import { render } from "https://raw.github.com/srackham/rimu/master/mod.ts";

const md = await readFileStr("./articles/swr/intro.mdx", { encoding: "utf8"})
await writeFileStr("./index.html", render(md));
