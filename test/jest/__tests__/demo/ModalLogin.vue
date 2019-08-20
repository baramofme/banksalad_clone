<template>
  <div class="c-modalLogin">
    <div>
      <label for="name">User</label>
      <input name="User">
    </div>

    <div>
      <label for ="password">Password</label>
      <input name="password" type="password">
    </div>

    <button class="c-modalLogin__cancel" @click="hideModal">Cancel</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'ModalLogin',
    data () {
      return {
        counter: 0,
        input: 'rocket muffin'
      }
    },
    methods: {
      increment () {
        this.counter++
      },
      ...mapMutations([
        'hideModal',
      ]),
    },
    created(){

    }
  };
</script>
