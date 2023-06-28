<template>
  <div></div>
</template>
  <script>
export default {
  data() {},
  methods: {},
};
export function getNameFromCookies() {
  const cookies = document.cookie.split(";");

  const userCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("user=")
  );

  if (userCookie) {
    const cookieValue = userCookie.trim().substring(5);
    try {
      const userObj = JSON.parse(cookieValue);
      if (userObj && userObj.name) {
        return userObj.name;
      }
    } catch (error) {
      console.error("Error parsing user cookie:", error);
    }
  }

  return null;
}

</script>