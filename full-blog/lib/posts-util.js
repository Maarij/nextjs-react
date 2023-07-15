import fs from 'fs';
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {data, content} = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content
  }
}

export function getAllPosts() {
  const allPosts = getPostsFiles().map(post => {
    return getPostData(post);
  });

  return allPosts.sort((a, b) => a.date > b.date ? -1 : 1);
}

export function getFeaturedPosts() {
  return getAllPosts().filter(post => post.isFeatured);
}