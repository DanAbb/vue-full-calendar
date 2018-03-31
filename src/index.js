import VueFullCalendar from './components/calendar'

import config, { setOptions } from './utils/config'

const components = {
    VueFullCalendar
}

components.install = (Vue, options = {}) => {
    // Options
    setOptions(Object.assign(config, options))

    for (const componentName in components) {
        const component = components[componentName]

        if (component && componentName !== 'install') {
            Vue.component(component.name, component)
        }
    }
}

export default components
