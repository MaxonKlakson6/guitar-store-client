export const fillWithZero = (id: number, limit: number): string => {
  let orderNumber = id.toString();

  while (orderNumber.length < limit) {
    orderNumber = "0" + orderNumber;
  }
  return orderNumber;
};
