<template>
</template>
<script>
  import { setIdToken, setAccessToken } from "../services/auth-service";
  export default {
    name: "Callback",
    mounted() {
      this.$nextTick(() => {
        setAccessToken();
        setIdToken();
        window.location.href = "/";
      });
    },
  };
</script>
