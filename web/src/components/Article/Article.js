import { Link, routes } from '@redwoodjs/router'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }) => {
  return (
    <article key={article.id}>
      <h2 className="text-cyan-800 text-3xl pb-3">
        <Link to={routes.article({ id: article.id })}>{article.title}</Link>
      </h2>
      <p className="text-lg">
        {summary ? truncate(article.body, 100) : article.body}
      </p>
      <div className="text-slate-700">Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
