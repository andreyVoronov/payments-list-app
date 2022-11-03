export default {
  state: {
    payments: [],
  },
  mutations: {
    SET_PAYMENTS_LIST(state, payments) {
      const i = Object.values(payments);
      const all = [];
      i.forEach((element) => all.push(...element));
      state.payments = all;
      return state.payments;
    },
    ADD_PAYMENT(state, newPayment) {
      state.payments.push(newPayment);
    },
  },
  actions: {
    async fetchPayments({ commit }) {
      return fetch('https://mocki.io/v1/a5ea4bf2-8823-471d-ad37-2cfb1180851a')
        .then((response) => response.json())
        .then((payments) => {
          commit('SET_PAYMENTS_LIST', payments);
        });
    },
  },
  getters: {
    allPayments(state) {
      return state.payments;
    },
  },
};
