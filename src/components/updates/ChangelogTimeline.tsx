export type ChangeType = "feature" | "fix" | "improvement" | "update";

export interface ChangelogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  type: ChangeType;
}

export function ChangelogTimeline(props: any) { return <div>Timeline</div>; }
