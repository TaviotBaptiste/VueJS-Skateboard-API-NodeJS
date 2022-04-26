<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-4">
                <DisplayBoard :numberOfSkateboards="numberOfSkateboards" @getAllSkateboards="getAllSkateboards()" />
            </div>
            <div class="col-md-8">
                <CreateSkateboard @createSkateboard="skateboardCreate($event)" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Skateboards v-if="skateboards.length > 0" :skateboards="skateboards" />
    </div>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateSkateboard from './CreateSkateboard.vue'
import DisplayBoard from './DisplayBoard.vue'
import Skateboards from './Skateboards.vue'
import About from './About.vue'
import Footer from './Footer.vue'
import { getAllSkateboards, createSkateboard } from '../services/SkateboardService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateSkateboard,
    DisplayBoard,
    Skateboards,
    About,
    Footer
  },
  data() {
      return {
          skateboards: [],
          numberOfSkateboards: 0
      }
  },
  methods: {
    getAllSkateboards() {
      getAllSkateboards().then(response => {
        console.log(response)
        this.skateboards = response
        this.numberOfSkateboards = this.skateboards.length
      })
    },
    skateboardCreate(data) {
      console.log('data:::', data)
      createSkateboard(data).then(response => {
        console.log(response);
        this.getAllSkateboards();
      });
    }
  },
  mounted () {
    this.getAllSkateboards();
  }
}
</script>