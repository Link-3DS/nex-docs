import fs from "fs/promises";
import path from "path";
import MarkdownPage from "../components/MarkdownPage";

export default async function GameServers() {
  const filePath = path.join(process.cwd(), "docs", "game-servers.md");
  const markdown = await fs.readFile(filePath, "utf8");

  return <MarkdownPage markdown={markdown} />;
}