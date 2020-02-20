import ACTIONS from '../../actions'

const initialState = {
  posts: [],
  comments: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_POSTS:
      return { posts: [...state.posts, ...action.payload] }
    case ACTIONS.GET_COMMENTS:
      return { comments: [...state.posts, ...action.payload] }
    default:
      return state
  }
}
