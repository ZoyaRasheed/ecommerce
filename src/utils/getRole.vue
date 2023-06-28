<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
export function getRoleFromCookies() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("role=")) {
      const roleValue = cookie.split("=")[1];
      return roleValue;
    }
  }
  return null;
}
</script>