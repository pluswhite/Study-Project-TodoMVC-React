import { injectReducer } from 'vstore/reducers'
// import TodoApp from './containers/TodoAppContainer'

// Sync route definition
// export default {
//   component : TodoApp
// }

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([
      './containers/TodoAppContainer',
      './modules/todoApp'
    ], (require) => {
      const TodoApp = require('./containers/TodoAppContainer').default
      const reducer = require('./modules/todoApp').default

      injectReducer(store, { key: 'todo', reducer })

      cb(null, TodoApp)
    }, 'todo')
  }
})
