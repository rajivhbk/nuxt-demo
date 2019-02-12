<template>
  <div>
    <ul class="newspaper-container" @click="articleSelected">
      <li v-for="paper in papers" :id="paper.lccn" :key="paper.lccn" class="newspaper">
        <span :id="paper.lccn" class="title">{{ paper.title }}</span>
      </li>
    </ul>
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
      return this.$store.getters.uniqueNews
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
