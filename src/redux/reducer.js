import * as action from "../redux/actions/actionTypes";
import moment from "moment";

const initialState = {
  allNotices: [],
  noticeDetail: [],
  teams: [],

  copyAllNotices: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case action.POST_IMAGE: {
      return {
        ...state,
      };
    }
    case action.GET_ALL_NOTICES: {
      return {
        ...state,
        allNotices: payload,
      };
    }
    case action.CREATE_NOTICE: {
      return {
        ...state,
      };
    }
    case action.CLEAR_STATE: {
      return {
        ...state,
        noticeDetail: [],
      };
    }

    default:
      return state;
  }
}
