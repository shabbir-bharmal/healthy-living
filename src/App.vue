<template>
  <div id="app">
    <nav>
      <router-link to='/'>Home</router-link>
      &nbsp; &nbsp;<router-link to='/compare'>Compare Food</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
  }
</script>