<template>
  <div>
    <Navigation />
    <Sidebar />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '@/layouts/partials/Navigation'
import Sidebar from '@/layouts/partials/Sidebar'
export default {
  components : {
      Navigation, Sidebar
    }
}
</script>
