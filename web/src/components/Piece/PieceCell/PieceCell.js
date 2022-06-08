import Piece from 'src/components/Piece/Piece'

export const QUERY = gql`
  query FindPieceById($id: String!) {
    piece: piece(id: $id) {
      id
      title
      script
      url
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Piece not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ piece }) => {
  return <Piece piece={piece} />
}
