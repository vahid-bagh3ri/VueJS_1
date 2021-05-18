<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton }
};
</script>
