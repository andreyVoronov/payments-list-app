<template>
<div class="">
  <div class="payments-list" v-for="payment in allPayments" :key="payment.id">
    <p>{{ payment.date }}</p>
    <p>{{ payment.category }}</p>
    <p>{{ payment.value }}</p>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['allPayments', 'allPages']),
  methods: mapActions(['fetchPayments']),
  async mounted() {
    this.fetchPayments();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
