import { Entry, EntryCollection } from "contentful";
import {
  contentfulDeliveryApiClient,
  contentfulPreviewApiClient,
} from "./clients";

type FetchEntryOptions = {
  preview?: boolean;
} & (
  | {
      id: string;
      slug?: never;
    }
  | {
      id?: never;
      slug: string;
    }
);

type FetchEntriesOptions = {
  preview?: boolean;
};

const fetchPage = async ({
  preview,
  id,
  slug,
}: FetchEntryOptions): Promise<Entry<Contentful.IPageFields>> => {
  const contentfulClient = preview
    ? contentfulPreviewApiClient
    : contentfulDeliveryApiClient;

  let page: Entry<Contentful.IPageFields>;

  if (id) {
    page = await contentfulClient.getEntry(id);
  } else {
    const pageCollection: EntryCollection<Contentful.IPageFields> = await contentfulClient.getEntries(
      {
        content_type: "page",
        "fields.slug": slug,
      }
    );

    page = pageCollection.items?.[0];
  }

  return page;
};

const fetchPageCollection = async ({
  preview,
}: FetchEntriesOptions): Promise<EntryCollection<Contentful.IPageFields>> => {
  const contentfulClient = preview
    ? contentfulPreviewApiClient
    : contentfulDeliveryApiClient;

  const pageCollection: EntryCollection<Contentful.IPageFields> = await contentfulClient.getEntries(
    { content_type: "page" }
  );

  return pageCollection;
};

export { fetchPage, fetchPageCollection };
