<template>
  <div class="container pt-1">
    <div class="card">
      <h2>News {{ now }}</h2>
      <span>Clicked: {{ openRate }} | Read: <strong>{{ readRate }}</strong></span>
    </div>
    <app-news
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
        :was-read="item.wasRead"
        @news-open="openNews"
        @read-news="readNews"
        @mark-as-unread="markAsUnread"
    ></app-news>
  </div>
</template>

<script>


import News from "@/components/News";

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          id: 1,
          title: 'News-1',
          isOpen: false,
          wasRead: false
        },
        {
          id: 2,
          title: 'News-2',
          isOpen: false,
          wasRead: false
        },
        {
          id: 3,
          title: 'News-3',
          isOpen: false,
          wasRead: false
        }
      ],
      openRate: 0,
      readRate: 0
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {

      this.readRate++
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
    },
    markAsUnread(id){
      const markedIdx = this.news.findIndex(news=>news.id === id)
      this.news[markedIdx].wasRead = false
      this.readRate--
    }
  },
  components: {
    'app-news': News
  }
}
</script>



