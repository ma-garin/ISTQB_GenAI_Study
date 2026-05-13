export function collectTocHeadings(root = document) {
  return [...root.querySelectorAll(".ja-column h2[id], .ja-column h3[id], section[id]")].map((node) => ({
    id: node.id,
    title: node.textContent.trim(),
  }));
}
