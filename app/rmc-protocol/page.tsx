import fs from "fs/promises";
import path from "path";
import MarkdownPage from "../components/MarkdownPage";

export default async function RmcProtocol() {
  const filePath = path.join(process.cwd(), "docs", "rmc-protocol.md");
  const markdown = await fs.readFile(filePath, "utf8");

  return <MarkdownPage markdown={markdown} />;
}