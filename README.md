# Vue Fullpage Calendar

A super simple full page calendar component for vuejs

### Install via npm

```bash
npm install vue-fullpage-calendar
```

### Import and use

```javascript
import Vue from 'vue';
import VueFullpageCalendar from 'vue-fullpage-calendar';
import 'vue-fullpage-calendar/lib/main.css';

Vue.use(VueFullpageCalendar);
...
```

```html
  <vue-fullpage-calendar
    :leftArrow="leftArrow"
    :rightArrow="rightArrow"
    @dateClicked="doSomething">
  </vue-fullpage-calendar>
```

### Props

`leftArrow` - Left arrow image

`rightArrow` - Right arrow image

### Events

`dateClicked` - Event called on date cell clicked. Passes date array in format [day, month, year]