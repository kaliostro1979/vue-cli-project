<template>
  <div class="card">
    <h3>{{ title }} {{ id }}</h3>
    <app-button @action="open" :text="isNewsOpen ? 'Close' : 'Open'"></app-button>
    <app-button v-if="wasRead" color="danger" @action="markAsUnread" text="Mark as unread"></app-button>
    <div v-if="isNewsOpen">
      <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias delectus doloribus,
      eius esse
      minima qui quod saepe sit.
    </p>
      <app-button
          v-if="!wasRead"
          color="primary"
          @action="read"
          text="Read News">
      </app-button>
    </div>
  </div>
</template>

<script>

import Button from "@/components/Button";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value){
        return value === true || value === false
      }
    },
    wasRead:{
      type: Boolean
    }
  },
  emits:{
    'news-open':null,
    'read-news'(id){
      if (id){
        return true
      }
      console.log('No id parameter')
      return false
    },
    'mark-as-unread'(id){
      if (id){
        return true
      }
      console.log('No id parameter')
      return false
    }
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
    }
  },
  methods:{
    open(data){
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen){
        this.$emit('news-open')
      }
    },
    read(){
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    markAsUnread(){
      this.$emit('mark-as-unread', this.id)
    }
  },
  components:{
    'app-button': Button
  }
}
</script>

<style scoped>

</style>