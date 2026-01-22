export interface KanbanCard {
  id: string;
  title: string;
  status: "todo" | "in_progress" | "done";
}

export function groupCardsByColumn(cards: KanbanCard[]) {
  return {
    todo: cards.filter(c => c.status === "todo"),
    in_progress: cards.filter(c => c.status === "in_progress"),
    done: cards.filter(c => c.status === "done"),
  };
}
