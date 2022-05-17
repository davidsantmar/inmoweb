import housePriceActionTypes from "./housePriceActionTypes";

export function sumMoney() {
  return {
    type: housePriceActionTypes.SUM_MONEY,
  };
}

export function subtractMoney() {
  return {
    type: housePriceActionTypes.SUBTRACT_MONEY,
  };
}
