import { pieces, piece, createPiece, updatePiece, deletePiece } from './pieces'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pieces', () => {
  scenario('returns all pieces', async (scenario) => {
    const result = await pieces()

    expect(result.length).toEqual(Object.keys(scenario.piece).length)
  })

  scenario('returns a single piece', async (scenario) => {
    const result = await piece({ id: scenario.piece.one.id })

    expect(result).toEqual(scenario.piece.one)
  })

  scenario('creates a piece', async () => {
    const result = await createPiece({
      input: { title: 'String', script: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.script).toEqual('String')
  })

  scenario('updates a piece', async (scenario) => {
    const original = await piece({ id: scenario.piece.one.id })
    const result = await updatePiece({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a piece', async (scenario) => {
    const original = await deletePiece({ id: scenario.piece.one.id })
    const result = await piece({ id: original.id })

    expect(result).toEqual(null)
  })
})
