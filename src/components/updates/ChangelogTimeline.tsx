export type ChangeType = "feature" | "fix" | "improvement" | "update";

export interface ChangelogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  type: ChangeType;
  version?: string;
  changes?: string[];
  [key: string]: any;
}

export function ChangelogTimeline(props: any) { return <div>Timeline</div>; }
