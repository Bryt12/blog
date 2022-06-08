import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PIECE_MUTATION = gql`
  mutation DeletePieceMutation($id: String!) {
    deletePiece(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Piece = ({ piece }) => {
  const [deletePiece] = useMutation(DELETE_PIECE_MUTATION, {
    onCompleted: () => {
      toast.success('Piece deleted')
      navigate(routes.pieces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete piece ' + id + '?')) {
      deletePiece({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Piece {piece.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{piece.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{piece.title}</td>
            </tr>
            <tr>
              <th>Script</th>
              <td>{piece.script}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{piece.url}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(piece.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPiece({ id: piece.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(piece.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Piece
