import Article from 'src/components/Article'

export const QUERY = gql`
  query FindArticleQuery($id: String!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => (
  <div className="flex justify-center pt-10">Loading...</div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }) => {
  return (
    <>
      <div className="flex justify-center pt-10 ">
        <div className="w-1/2">
          <Article article={article} />
        </div>
      </div>
    </>
  )
}
