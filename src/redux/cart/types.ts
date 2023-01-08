export interface cartSliceState {
  totalPrice: number;
  items: cartPizza[];
}
export type cartPizza = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
};
