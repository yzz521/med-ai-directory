export interface EntryData {
  id: number;
  slug: string;
  name: string;
  category: string;
  summary: string;
  url: string;
  region_or_version: string;
  reason: string;
  verified_date?: string;
  official: boolean;
  disclaimer: string;
}

/**
 * Tags are not stored on the entry. They are read off fields that already exist:
 * official true/false, and the words 开源 / 商业 when the category text contains them.
 */
export function entryTags(entry: Pick<EntryData, 'official' | 'category'>): string[] {
  const tags = [entry.official ? '官方' : '第三方'];
  if (entry.category.includes('开源')) tags.push('开源');
  if (entry.category.includes('商业')) tags.push('商业');
  return tags;
}

export function isHttpUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

export function byId<T extends { data: { id: number } }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.data.id - b.data.id);
}
