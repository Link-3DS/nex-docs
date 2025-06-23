"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SideMenu from "./sidemenu";

export default function MarkdownPage({ markdown }: { markdown: string }) {
  return (
    <>
      <SideMenu />
      <main className="markdown-container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </main>
    </>
  );
}