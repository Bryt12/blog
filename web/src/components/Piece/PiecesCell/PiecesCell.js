import { Link, routes } from '@redwoodjs/router'

import Pieces from 'src/components/Piece/Pieces'

export const QUERY = gql`
  query FindPieces {
    pieces {
      id
      title
      script
      url
      posted
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pieces yet. '}
      <Link to={routes.newPiece()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ pieces }) => {
  return <Pieces pieces={pieces} />
}
