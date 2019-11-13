<template>
  <div id="main-content">
        <div class="container-fluid">
            <ContactBreadcumb />
            <AddContact />
            <ContactTable />
        </div>
    </div>
</template>

<script>
import ContactBreadcumb from '@/components/breadcumb/Contact'
import ContactTable from '@/components/table/Contact'
import AddContact from '@/components/modal/Add'
export default {
  components : {
      ContactBreadcumb, ContactTable, AddContact
    }
}
</script>
