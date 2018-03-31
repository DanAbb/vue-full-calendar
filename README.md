# Vue Full Calendar

A super simple full page calendar component for vuejs

### Install via npm

```bash
npm install vue-full-calendar
```

### Import and use

```javascript
import Vue from 'vue';
import VueFullCalendar from 'vue-full-calendar';
import 'vue-full-calendar/lib/main.css';

Vue.use(VueFullCalendar);
...
```

```html
  <vue-full-calendar
    :leftArrow="leftArrow"
    :rightArrow="rightArrow"
    @dateClicked="doSomething">
  </vue-full-calendar>
```

### Props

`leftArrow` - Left arrow image

`rightArrow` - Right arrow image

### Events

`dateClicked` - Event called on date cell clicked. Passes date array in format [day, month, year]