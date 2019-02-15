<template>
  <div>
    <ul class="newspaper-container" @click="articleSelected">
      <li v-for="paper in activePageData" :id="paper.lccn" :key="paper.lccn" class="newspaper">
        <span :id="paper.lccn" class="title">{{ paper.title }}</span>
      </li>
    </ul>
    <b-pagination size="md" :total-rows="papers.length" v-model="currentPage" :per-page="batchSize" />
  </div>
</template>

<style>
  .newspaper-container{
    padding: 20px;
  }
  .newspaper{
    width: 100%;
    list-style: none;
    height: 40px;
    border: 1px solid #f1f1f1;
    cursor: pointer;
  }
  .newspaper:hover{
    background-color: #7f828b;
  }
  .title{
    display: inline-block;
    vertical-align: middle;
    padding: 6px;
  }
</style>

<script>
export default {
  computed: {
    papers() {
      return this.$store.getters['newspapers/uniqueNews']
    },
    // noOfPages() {
    //   return this.papers.length / this.batchSize
    // },
    pageOffset() {
      return (this.currentPage - 1) * this.batchSize
    },
    activePageData() {
      const data = this.papers.slice(this.pageOffset, this.pageOffset + this.batchSize)
      return data
    }
  },
  data() {
    return {
      currentPage: 1,
      batchSize: 10
    }
  },
  methods: {
    articleSelected(e) {
      const id = e.target.id
      this.$router.push(`newspapers/${id}`)
    }
  }
}
</script>
