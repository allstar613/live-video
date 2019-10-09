<template>
  <div class="ui-dialog">
    <div class="window">
      <div class="window--contents">
       <slot name="content"></slot>
      </div>
      <div class="window--buttons">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>