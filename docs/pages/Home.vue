<template>
  <section class="home">
    <!-- <app-header home></app-header> -->

    <vue-fullpage-calendar
      :leftArrow="leftArrow"
      :rightArrow="rightArrow"
      @dateClicked="doSomething">
    </vue-fullpage-calendar>

    <!-- <app-footer></app-footer> -->
  </section>
</template>

<script>
  import AppHeader from '../template/Header'
  import AppFooter from '../template/Footer'

  import leftArrow from '../assets/img/left-arrow.png'
  import rightArrow from '../assets/img/right-arrow.png'

  export default {
    name: 'app',
    data () {
      return {
        leftArrow,
        rightArrow
      }
    },
    methods: {
      doSomething (dateArr) {
        console.log(dateArr)
      }
    },
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
