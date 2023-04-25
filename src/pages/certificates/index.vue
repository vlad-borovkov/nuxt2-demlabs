<template>
  <CertificatesTemplate :mockItems="mockItems" />
</template>

<script>
import CertificatesTemplate from "@/components/templates/certificates/index.vue";

export default {
  name: "Certificates",
  components: { CertificatesTemplate },
  data() {
    return {
      mockItems: [
        {
          name: "core-t.0",
          id: 1,
          type: "public",
        },
        {
          name: "core-t.1",
          id: 2,
          type: "public",
        },
        {
          name: "core-t.2",
          id: 3,
          type: "public",
        },
        {
          name: "test.test.1",
          id: 4,
          type: "public",
        },
        {
          name: "test.test.2",
          id: 5,
          type: "public",
        },
        {
          name: "test.test.3",
          id: 6,
          type: "public",
        },
        {
          name: "test.test.4",
          id: 7,
          type: "public",
        },
        {
          name: "test.test.5",
          id: 8,
          type: "public",
        },
        {
          name: "test.test.6",
          id: 9,
          type: "public",
        },
        {
          name: "test.test.7",
          id: 10,
          type: "public",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
