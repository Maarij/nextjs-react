import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from 'next/head'
import { Fragment } from "react";
import { Meta } from "next/dist/lib/metadata/generate/meta";

function PostDetailPage(props) {
  return <Fragment>
    <Head>
      <title>{props.post.title}</title>
      <meta name={"description"} content={props.post.excerpt} />
    </Head>
    <PostContent post={props.post} />
  </Fragment>
}

export function getStaticProps(ctx) {
  const {params} = ctx;
  const {slug} = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postsFilenames = getPostsFiles();

  const strippedFilenames = postsFilenames.map(filename => filename.replace(/\.md$/, ''));

  return {
    paths: strippedFilenames.map(filename => ({params: {slug: filename}})),
    fallback: false
  }
}

export default PostDetailPage;