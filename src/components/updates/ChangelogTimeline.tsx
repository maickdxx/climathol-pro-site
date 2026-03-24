export type ChangeType = "feature" | "fix" | "improvement" | "update";

export interface ChangelogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  type: ChangeType;
  version?: string;
  changes?: Array<{ type: string; description: string } | string>;
  [key: string]: any;
}

export function ChangelogTimeline(props: any) { return <div>Timeline</div>; }
