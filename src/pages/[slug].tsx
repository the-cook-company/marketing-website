import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const SlugPage: NextPage = () => {
  return <p>Page</p>;
};

const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [{ params: { slug: "index" } }], fallback: true };
};

const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);

  return { props: {} };
};

export { getStaticProps, getStaticPaths };
export default SlugPage;
