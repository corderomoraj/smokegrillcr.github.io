type Order = any;

const ORDER_KEY = 'smokegrill_orders';

const orderStore = {
  saveOrder(order: Order) {
    const raw = localStorage.getItem(ORDER_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.push({ id: Date.now().toString(), ...order });
    localStorage.setItem(ORDER_KEY, JSON.stringify(list));
  },
  getOrders() {
    const raw = localStorage.getItem(ORDER_KEY);
    return raw ? JSON.parse(raw) : [];
  }
};

export default orderStore;
