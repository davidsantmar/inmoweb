import housePriceActionTypes from "../actions/housePriceActionTypes";

function housePriceReducer(housePrice = 0, action) {
  switch (action.type) {
    case housePriceActionTypes.SUM_MONEY:
      return housePrice + 10000;
    case housePriceActionTypes.SUBTRACT_MONEY:
      return housePrice - 10000;
    default:
      return housePrice;
  }
}

export default housePriceReducer;
