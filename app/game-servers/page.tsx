import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import SideMenu from "../components/sidemenu";

export default function GameServerReadme() {
  const filePath = path.join(process.cwd(), "docs", "game-servers.md");
  let content = "Fichier `docs/game-servers.md` introuvable.";
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, "utf8");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 relative text-center bg-gray-100">
      <SideMenu />
      <section className="markdown">
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </main>
  );
}