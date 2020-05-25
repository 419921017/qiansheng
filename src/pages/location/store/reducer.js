import produce from "immer";

import { CHANGE_LOCATION_NAME } from "./constants";

const initState = {
  locationName: "未知地点",
  lat: 99.999,
  lng: 99.999
};

const reducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCATION_NAME:
        draft.locationName = action.data;
        break;
    }
  });
};

export default reducer;
