export const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sync: 'SYNC',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    sync: true,
    loading: false,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sync]: {
    ...state,
    sync: false,
    loading: true,
  },
});

export const initialState = ({ initialValue }) => ({
  sync: true,
  loading: true,
  error: false,
  item: initialValue,
});

export const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;