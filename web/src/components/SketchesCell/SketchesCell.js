import Sketch from 'src/components/Sketch'

export const QUERY = gql`
  query SketchesQuery {
    sketches: pieces {
      id
      title
      script
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ sketches }) => {
  return (
    <div className="grid grid-cols-3">
      {sketches.map((sketch) => {
        return <Sketch key={sketch.id} sketch={sketch} />
      })}
    </div>
  )
}
