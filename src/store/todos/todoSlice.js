import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = [
  { id: 1, name: "Redux/toolkit", compeleted: false },
  { id: 2, name: "Angular/Scully", compeleted: false },
  { id: 3, name: "Vue/Composition", compeleted: false },
];

export const fetchPostsListApi = createAsyncThunk("fetchTodos", async () => {
  return await axios
    .get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => response.data);
});

const todoSlice = createSlice({
  name: "TODO_SLICE",
  initialState: {
    todosList: [],
    postsList: [],
  },
  reducers: {
    fetchTodos: (state) => {
      return {
        ...state,
        todosList: data,
      };
    },
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [fetchPostsListApi.fulfilled]: (state, action) => {
      return {
        ...state,
        postsList: action.payload,
      };
    },
  },
});

const { actions, reducer } = todoSlice;

export const { fetchTodos, addTodo } = actions;
export default reducer;
