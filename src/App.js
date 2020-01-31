import React from 'react'
import Layout from './hoc/layout/Layout'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './containers/Home/Home'
import Todos from './containers/Todos/Todos'


const App = () =>{
    return <Layout>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Todos}/>
          <Redirect to='/' />
      </Switch>
    </Layout>
    }

    
export default App