<template>
<div>
    <div class="case">
        <x-head></x-head>
    </div>
    <div class="view">
        <x-add></x-add>
    </div>    
</div>
</template>
<script>
import head from '../../views/separate/Head.vue'
import addview from '../../views/separate/addview.vue'
export default {
    name: 'x-bookcase',
    components: {
        "x-head" : head,
        "x-add" : addview
    }
}
</script>
<style scoped>
.case{
    background-color: red;
    width: 100%;
    height: 3.125rem;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
}
</style>
