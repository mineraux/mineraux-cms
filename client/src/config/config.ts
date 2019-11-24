import Home from '../pages/Home'
import MyPages from '../pages/MyPages'

interface routeInterface {
  path: string
  name: string
  component: any
}

interface routesInterface {
  [k: string]: routeInterface
}

interface configInterface {
  routes: routesInterface
}

const config: configInterface = {
  routes: {
    Home: {
      path: '/',
      name: 'Home',
      component: Home,
    },
    MyPages: {
      path: '/MyPages',
      name: 'MyPages',
      component: MyPages,
    },
  },
}

export default config