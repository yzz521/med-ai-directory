/** Escape text, then keep the source's **bold** markers. */
export function inlineHtml(source: string): string {
  const escaped = source
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return escaped.replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>');
}

export function plainText(source: string): string {
  return source.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
}

export function metaDescription(source: string, max = 140): string {
  const text = plainText(source);
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}
