import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop();
  
  return (
    <div className='app'>
      {/* 头部 */}
      <AppHeader></AppHeader>
      {/* 内容部分 */}
      <div className="page">
        {useRoutes(routes)}
      </div>
      {/* 尾部*/}
      <AppFooter></AppFooter>
    </div>
  )
})

export default App