import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { fetchPage, fetchPageCollection } from "util/contentful";
import { stringify, parse } from "flatted";
import { Center, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

type PagePageProps = {
  preview: boolean;
  stringifiedPage: string;
};

const PagePage: NextPage<PagePageProps> = ({ preview, stringifiedPage }) => {
  const page: Contentful.IPage = parse(stringifiedPage);

  return (
    <>
      <Head>
        <title>{`${page.fields.title} | The Cook Company`}</title>
      </Head>
      {preview ? (
        <Center bg="red" color="white">
          <NextLink href="/api/preview/exit">
            <Link>Exit Preview</Link>
          </NextLink>
        </Center>
      ) : null}
      Page
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async (context) => {
  const page = await fetchPage({
    preview: context.preview,
    slug: context.params.slug.toString(),
  });

  const props: PagePageProps = {
    preview: context.preview ? true : false,
    stringifiedPage: stringify(page),
  };

  return { props };
};

export default PagePage;
