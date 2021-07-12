<template>
    <ol class="contents" :class="`level-${level}-wrapper`">
        <li v-for="child in children.children" :key="child">
            <userCard  :level="level"  :data="child" />
            <!--<h2 :class="[`level-${level}`, 'rectangle']">{{ child.name }}</h2>-->
            <treeFolder v-if="child.children" :folder="child" :level="level" />
        </li>
    </ol>
</template>

<script>
export default {
  name: 'treeContents',
  props: {
    children: {
      type: [Object, Array]
    },
    level: {
        type: Number
    }
  }
}
</script>