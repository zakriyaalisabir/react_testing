import ACTIONS from '../../actions'
import postsReducer from './index'

describe('Posts Reducer', () => {
  it('should return default state which is empty', () => {
    const newState = postsReducer(undefined, {})
    expect(newState).toHaveProperty('posts')
    expect(newState).toHaveProperty('comments')

    const { posts, comments } = newState
    expect(posts).toEqual([])
    expect(comments).toEqual([])
  })

  it('should return posts from updated state', () => {
    const payload = [{ a: 1 }, { b: 2 }]
    const newState = postsReducer(undefined, {
      type: ACTIONS.GET_POSTS,
      payload
    })
    expect(newState).toHaveProperty('posts')

    const { posts } = newState
    expect(posts.length).toBeGreaterThan(0)
  })
})
