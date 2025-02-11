function applyStylesToMarkdownTurnedHtml(content: string) {
  let newContent = "";
  newContent = content.replace("<h1", "<h1 class='text-3xl font-bold'");
  return newContent;
}

export default applyStylesToMarkdownTurnedHtml;
