<template>
  <div class="todo-list">
    <slot name="header">
      <h2>Default Header</h2>
    </slot>

    <ul>
      <slot
        v-for="option in options"
        name="item"
        :item="option"
      >
        <li :key="option.id">
          {{ option.text }}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        id: 0,
        text: 'tak',
      },
      {
        id: 1,
        text: 'nie',
      },
    ],
  }),
};
</script>
