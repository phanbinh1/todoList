import {
  GET_TASK_LIST,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
} from '../constants';

export function getTaskList(params) {
  return {
    type: GET_TASK_LIST,
    payload: params,
  }
}

export function createTask(params) {
  return {
    type: CREATE_TASK,
    payload: params,
  }
}

export function editTask(params) {
  return {
    type: EDIT_TASK,
    payload: params,
  }
}

export function deleteTask(params) {
  return {
    type: DELETE_TASK,
    payload: params,
  }
}

export function completeTask(params) {
  return {
    type: COMPLETE_TASK,
    payload: params,
  }
}
