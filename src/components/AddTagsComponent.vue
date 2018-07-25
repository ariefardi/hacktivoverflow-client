<template>
<div>
  <v-combobox
    v-model="chips"
    label="at least one tag such as (bash node.js angular), max"
    chips
    clearable
    prepend-icon="filter_list"
    solo
    multiple
    class="tags"
  >
    <template slot="selection" slot-scope="data">
      <v-chip
        close
        @input="remove(data.item)"
      >
        <v-card color="blue lighten-4" style="padding:0">
            <div class="paddingInside">
                <strong>{{ data.item }}</strong>
            </div>
        </v-card>
      </v-chip>
    </template>
  </v-combobox>
</div>
</template>

<script>
  export default {
    data () {
      return {
        chips: ['Javascript']
      }
    },

    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
  }
</script>
<style>
.tags {
    padding: 0;
}
.paddingInside {
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 3px;
    padding-right: 3px;
}
</style>


