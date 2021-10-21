<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <Author :show-title="true" />
    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.welcome_posts.edges" :key="edge.node.id" :post="edge.node"/>
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  welcome_posts: allPost(sort: [, { by: "date", order: DESC }, { by: "date", order: DESC }], filter: { slug: {eq: "welcome"}, published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        lastmod (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
  posts: allPost(filter: { slug: {ne: "welcome"}, published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'The Story of Eight'
  }
}
</script>
