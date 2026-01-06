import { useEffect, useState } from "react";

export const useMarkdownFile = (filePath: string) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to load markdown file: ${response.statusText}`);
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setContent("");
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [filePath]);

  return { content, loading, error };
};
