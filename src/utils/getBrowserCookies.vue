<template>
  <div></div>
</template>
<script>
export default {
  data() {},
  methods: {},
};
export function getTokenFromCookie() {
  const cookies = document.cookie.split(";");
  const tokenCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("token=")
  );

  if (tokenCookie) {
    const [, token] = tokenCookie.split("=");
    return token;
  }

  return null;
}
</script>
