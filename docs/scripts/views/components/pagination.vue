<template>
  <docs-page name="pagination" demo-count="5">
    <template #hero>
      <ui-pagination
        v-model="page"
        :total="total"
        show-total
        :page-span="false"
        :page-size="[10, 25, 50]"
      ></ui-pagination>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
      <div class="demo">
        <ui-pagination
          v-model="page1"
          :total="total1"
          show-total
          position="center"
        ></ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Pagination with page size</h6>
      <div class="demo">
        <ui-pagination
          v-model="page2"
          :total="total2"
          show-total
          :page-size="[10, 25, 100]"
          position="left"
        >
          <template #default="{ currentMinRow, currentMaxRow }">
            {{ currentMinRow }} - {{ currentMaxRow }} / {{ total2 }}
          </template>
        </ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Pagination with jumper</h6>
      <div class="demo">
        <ui-pagination
          v-model="page3"
          :total="total3"
          show-total
          show-jumper
        ></ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.4 Mini Mode</h6>
      <div class="demo">
        <ui-pagination
          v-model="page4"
          :total="total4"
          show-total
          mini
        ></ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.5 Pagination with page size and jumper</h6>
      <div class="demo">
        <ui-pagination
          v-model="page5"
          :total="total5"
          show-total
          :page-size="[10, 25, 100]"
          show-jumper
        >
          <template #default="{ currentMinRow, currentMaxRow }">
            {{ currentMinRow }} - {{ currentMaxRow }} / {{ total5 }}
          </template>
        </ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[5]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Pagination'
    };
  },
  data() {
    return {
      // hero
      page: 1,
      total: 100,
      // demo
      page1: 1,
      total1: 100,
      page2: 1,
      total2: 500,
      page3: 1,
      total3: 100,
      page4: 1,
      total4: 100,
      page5: 1,
      total5: 500
    };
  }
};
</script>
