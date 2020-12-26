import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { fetchPage, fetchPageCollection } from "util/contentful";
import { stringify, parse } from "flatted";

const PagePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <p>Page</p>;
};

const getStaticPaths: GetStaticPaths = async () => {
  const pageEntryCollection = await fetchPageCollection({});

  return {
    fallback: false,
    paths: pageEntryCollection.items.map((page) => ({
      params: {
        slug: page.fields.slug,
      },
    })),
  };
};

const getStaticProps: GetStaticProps = async (context) => {
  const page = await fetchPage({
    preview: context.preview,
    slug: context.params.slug.toString(),
  });

  return { props: { page: stringify(page) } };
};

export { getStaticProps, getStaticPaths };
export default PagePage;
