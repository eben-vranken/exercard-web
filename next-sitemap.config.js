/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.exercard.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
  },
  additionalPaths: async (config) => {
    const fs = require('fs');
    const path = require('path');
    const blogPostsPath = path.join(process.cwd(), 'data', 'blogposts.json');
    const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf-8'));

    return blogPosts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: new Date().toISOString(),
    }));
  },
};