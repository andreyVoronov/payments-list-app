<template>
    <div class="payment-block">
        <form @submit.prevent="submit" class="payment-block__form">
          <input type="number" placeholder="amount" v-model="value">
          <input type="text" placeholder="category" v-model="category">
          <input type="text" placeholder="Date" v-model="date">
          <button type="submit">Add</button>
        </form>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      value: '',
      date: '',
      category: '',
    };
  },
  methods: {
    ...mapMutations(['ADD_PAYMENT']),
    submit() {
      this.ADD_PAYMENT({
        value: this.value,
        date: this.date,
        category: this.category,
        id: 1,
      });
    },
  },
};
</script>
