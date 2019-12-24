import { Page } from 'graphql/components';

export type PagePick = Pick<Page, "title" | "_id">
export type ReadOnlyPagePick = ReadonlyArray<PagePick>