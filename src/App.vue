<template>
  <div>

  <!--   113  -->
    <LikeHeader113>
      <h3>はじめまして</h3>
    </LikeHeader113>
    <button @click="currentComponent113 ='Home113'">HOME</button>
    <button @click="currentComponent113 ='About113'">ABOUT</button>
    <!-- <about-113 v-if="currentComponent113==='About113'"></about-113>
    <home-113 v-if="currentComponent113==='Home113'"></home-113> -->
    <component :is="currentComponent113"></component>


    <LikeHeader headerText="hello">
      <template v-slot:title="slotProps">
        <h1>トータルのいいね数</h1>
        <h2>{{ slotProps }}</h2>
        <h2>{{ slotProps.user.firstname }}</h2>
      </template>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
      <h2>デフォルト</h2>
      <template v-slot:[title]>
        <h3>動的</h3>
      </template>
    </LikeHeader>
    <LikeHeade2></LikeHeade2>
    <!-- <LikeNumber v-on:my-click="number=$event"></LikeNumber> -->
    <LikeNumber
      :totalnumber="number"
      v-on:my-click="incrementNumber"
    ></LikeNumber>
    <LikeNumber :totalnumber="number" test-props="test"></LikeNumber>

    <div>
      <h2>イベントのフォーム</h2>
      <event-title v-model="eventData.title"></event-title>
      <!-- <event-title :value="eventData.title"
      @input="eventData.title=$event"
      ></event-title> -->
<pre>親{{ eventData.title }}</pre>
      <label for="maxNumber">人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      />
      <p>{{ typeof eventData.maxNumber }}</p>

      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host" />
      <pre>{{ eventData.host }}</pre>

      <label id="detail">イベント内容</label>
      <textarea
        id="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <pre>{{ eventData.detail }}</pre>
    </div>

    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />

    <label for="isPrivate">非公開</label>
    <p>{{ eventData.isPrivate }}</p>

    <p>参加条件</p>
    <label for="10">10代</label>
    <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
    <label for="20">20代</label>
    <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
    <label for="30">30代</label>
    <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
    <p>{{ eventData.target }}</p>

    <p>参加費</p>
    <label for="free">無料</label>
    <input type="radio" id="free" value="無料" v-model="eventData.price" />
    <label for="paid">有料</label>
    <input type="radio" id="paid" value="有料" v-model="eventData.price" />
    <p>{{ eventData.price }}</p>

<p>開催場所</p>
<select v-model="eventData.location">
   <option  v-for="location in locations" :key="location">{{location}}</option>
</select>
<p>{{ eventData.location }}</p>


  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeHeade2 from "./components/LikeHeader2.vue";
import EventTitle from "./components/EventTitle.vue";
import LikeHeader113 from "./components/LikeHeader113.vue";
import Home113 from "./components/Home113.vue";
import About113 from "./components/About113.vue";
export default {
  data() {
    return {
      number: 30,
      title: "title2",
      locations:["東京","大阪","名古屋"],
      eventData: {
        title: "タイトル",
        maxNumber: 10,
        host: "host",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京",
      },
      currentComponent113:"Home",
    };
  },
  components: {
    LikeHeader,
    LikeHeade2,
    EventTitle,
    LikeHeader113,
    Home113,
    About113,
  },

    methods: {
    incrementNumber(val) {
      console.log(val);
      this.number = val;
    },
  },
};
</script>

<style scoped>
h1 {
  border: 1px solid blue;
  color: red;
}
</style>
