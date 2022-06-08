import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import SketchesCell from 'src/components/SketchesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="grid grid-cols-2">
        <ArticlesCell />
        <SketchesCell />
      </div>
    </>
  )
}

export default HomePage
