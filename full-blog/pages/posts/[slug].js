import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.post} />
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