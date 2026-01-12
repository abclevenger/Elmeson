/**
 * This project currently stores editor content as HTML (see `BlogEditor` which calls `editor.getHTML()`).
 *
 * If we later decide to store Tiptap JSON instead, we can add `@tiptap/html` and implement a real
 * HTML <-> JSON converter here.
 */
export function htmlToTiptap(htmlContent: string): string {
  return htmlContent;
}

export function tiptapToHTML(content: unknown): string {
  if (typeof content === "string") return content;
  return "";
}
