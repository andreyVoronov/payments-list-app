<template>
  <div class="home">
    <list></list>
    <addPayment></addPayment>
  </div>
</template>

<script>
// @ is an alias to /src
import list from '@/components/list.vue';
import addPayment from '@/components/addPayment.vue';

export default {
  name: 'Home',
  components: {
    list,
    addPayment,
  },
};
</script>
