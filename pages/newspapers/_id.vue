<template>
  <div>
    <h1>Publications</h1>
    <b-card
      class="card-container"
      :title="data.name"
      >
      <dl>
        <dt>Place:</dt>
        <dd>{{ data.place_of_publication }}</dd>
        <dt>Start Year:</dt>
        <dd>{{ data.start_year }}</dd>
        <dt>End Year:</dt>
        <dd>{{ data.end_year  }}</dd>
        <dt>Publisher:</dt>
        <dd>{{ data.publisher }}</dd>
        <dt>Publications:</dt>
      </dl>
      <ul>
        <li class="publication-item" v-for="item in data.issues" :key="item.date_issued">
          <span class="title">{{ item.date_issued }}</span>
        </li>
      </ul>
    </b-card>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios.get(`https://chroniclingamerica.loc.gov/lccn/${context.params.id}.json`)
      .then((res) => {
        return { data: res.data }
      })
  }
}
</script>

<style>
  .card-container {
    margin: 10px;
  }
  .publication {}
  .publication-item {
    width: 100%;
    list-style: none;
    height: 40px;
    border: 1px solid #f1f1f1;
  }
  .title{
    display: inline-block;
    vertical-align: middle;
    padding: 6px;
  }
</style>
