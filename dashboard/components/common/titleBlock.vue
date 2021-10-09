<template>
  <div class="max-w-5xl mx-auto">
    <div
      class="flex flex-col md:flex-row justify-between items-center gap-4 py-8"
    >
      <tabs
        :tabs="tabs"
        :currentTab="currentTab"
        :wrapper-class="'default-tabs'"
        :tab-class="'item'"
        :tab-active-class="'item-active'"
        :line-class="'active-line'"
        @onClick="handleClick"
      />
      <div class="content">
        <div v-if="currentTab === 'tab1'">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </div>
        <div v-if="currentTab === 'tab2'">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div v-if="currentTab === 'tab3'">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </div>
      </div>
      <nav
        class="
          flex flex-wrap
          justify-center
          md:justify-start
          gap-x-4 gap-y-2
          md:gap-6
        "
      >
        <h1 class="text-3xl font-medium">{{ title }}</h1>
      </nav>

      <div class="flex gap-4" v-if="$route.path === '/dashboard'">
        <zi-button type="primary" @click="openDialog">Create Base</zi-button>
        <zi-dialog closeByModal v-model="visible" :beforeDone="createNewBase">
          <h3>Create new base?</h3>
          <zi-note label="" filled class="mt-20"> oeignewoigbwo </zi-note>
        </zi-dialog>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tabs from 'vue-tabs-with-active-line'
import Vue from 'vue'
import '@nuxtjs/axios'
export default Vue.extend({
  components: { Tabs },
  props: {
    title: String,
  },
  data() {
    return {
      newBaseId: '',
      visible: false,
      tabs: [
        { title: 'Tab 1', value: 'tab1' },
        { title: 'Tab 2', value: 'tab2' },
        { title: 'Tab 3', value: 'tab3' },
      ],
      currentTab: 'tab1',
    }
  },
  methods: {
    openDialog() {
      this.visible = true
    },
    createNewBase() {
      this.$store.dispatch('bases/createNewBase')
      this.visible = !this.visible
    },
    handleClick(newTab: string) {
      this.currentTab = newTab
    },
  },
})
</script>

<style scoped>
.zi-input {
  width: 100vw !important;
}

.default-tabs {
  position: absolute;
  margin: 0 auto;
  top: 0;
}

.item {
  display: inline-block;
  margin: 0 5px;
  padding: 10px;
  padding-bottom: 8px;
  font-size: 16px;
  letter-spacing: 0.8px;
  color: gray;
  text-decoration: none;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s;
}

.item-active {
  color: black;
}
.item:hover {
  border-bottom: 2px solid gray;
  color: black;
}
.item:focus {
  outline: none;
  border-bottom: 2px solid gray;
  color: black;
}
.item:first-child {
  margin-left: 0;
}
.item:last-child {
  margin-right: 0;
}

.active-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: black;
  transition: transform 0.4s ease, width 0.4s ease;
}

.content {
  margin-top: 30px;
  font-size: 20px;
}
</style>
