<template>
  <div class="calendar-wrapper">
    <div class="header">
      <div class="backward" @click.prevent="buildCalendar('backward')">
        <img :src="leftArrow" alt="arrow">
      </div>
      <div class="forward" @click.prevent="buildCalendar('forward')">
        <img :src="rightArrow" alt="arrow">
      </div>
      <h1>{{ formattedMonth }}</h1>
    </div>
    <div class="weekday">
      <div class="weekday-cell" v-for="day in days" :key="day">
        {{ day }}
      </div>
    </div>
    <div class="calendar">
      <div class="calendar-row" v-for="x in 6" :key="x">
        <div class="calendar-cell" v-for="x in 7" :key="x" @click.self="goToDate($event)">
          <p class="date"></p>
          <div class="info"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'VueFullpageCalendar',
  props: [
    'leftArrow',
    'rightArrow'
  ],
  created () {
  },
  mounted () {
    this.buildCalendar()
  },
  data () {
    return {
      days: [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
      ],
      month: moment(),
      formattedMonth: moment().format('MMMM YYYY')
    }
  },
  computed: {
  },
  methods: {
    buildCalendar (go = '') {
      const month = go === 'forward'
        ? this.getNextMonth()
        : go === 'backward'
          ? this.getPreviousMonth()
          : this.month.get('month')

      const daysInMonth = this.getDaysInMonth(month)
      const monthStartDay = this.getMonthStartDay(month)

      const cells = this.$el.querySelectorAll('.calendar-cell')
      let count = 1

      for (const cell of cells) {
        cell.classList.remove('disabled')
        cell.classList.remove('today')
        cell.querySelector('.date').innerHTML = ''
        cell.setAttribute('data-date', '')
      }

      for (const cell of cells) {
        if (count < monthStartDay || count >= (daysInMonth + monthStartDay)) {
          cell.classList.add('disabled')
        } else if ((count - monthStartDay + 1) === moment().get('date') && this.month.get('month') === moment().get('month')) {
          cell.querySelector('.date').innerHTML = count - monthStartDay + 1
          const today = moment().year(this.month.get('year')).month(this.month.get('month')).date(count - monthStartDay + 1)
          cell.setAttribute('data-date', today.format('DD/MM/YYYY'))
          cell.classList.add('today')
        } else {
          cell.querySelector('.date').innerHTML = count - monthStartDay + 1
          const today = moment().year(this.month.get('year')).month(this.month.get('month')).date(count - monthStartDay + 1)
          cell.setAttribute('data-date', today.format('DD/MM/YYYY'))
        }
        count++
      }

      this.formattedMonth = this.month.format('MMMM YYYY')
    },
    getDaysInMonth (month) {
      return moment().month(month).daysInMonth()
    },
    getMonthStartDay (month) {
      return moment().month(month).startOf('month').get('isoWeekday')
    },
    getNextMonth () {
      const month = this.month.add(1, 'months')
      this.month = month
      return month.get('month')
    },
    getPreviousMonth () {
      this.month = this.month.subtract(1, 'months')
      return this.month.get('month')
    },
    goToDate (ev) {
      if (ev.target.classList.contains('disabled')) return
      const date = ev.target.getAttribute('data-date')
      const dateArr = date.split('/')
      this.$emit('dateClicked', dateArr)
    }
  }
}
</script>
