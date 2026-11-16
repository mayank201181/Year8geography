// Type-check just the given files with the project's compiler options (path aliases included).
// Usage: node scripts/tc.mjs lib/topics/foo.ts components/widgets/foo.tsx
import { writeFileSync, mkdtempSync } from "fs";
import { execFileSync } from "child_process";
import { tmpdir } from "os";
import path from "path";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const files = process.argv.slice(2).map((f) => path.resolve(f));
const dir = mkdtempSync(path.join(tmpdir(), "tc-"));
const cfg = path.join(dir, "tsconfig.json");
writeFileSync(cfg, JSON.stringify({
  compilerOptions: { noEmit: true, skipLibCheck: true, jsx: "react-jsx", target: "es2022", moduleResolution: "bundler", module: "esnext", strict: true, esModuleInterop: true, baseUrl: root, paths: { "@/*": ["./*"] }, typeRoots: [path.join(root, "node_modules/@types")], types: ["react", "node"] },
  files,
}));
try { execFileSync(path.join(root, "node_modules/.bin/tsc"), ["-p", cfg], { stdio: "inherit" }); console.log("tc: OK"); }
catch { process.exit(1); }
