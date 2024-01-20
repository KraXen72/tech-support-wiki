<template>
  <div class="youtube-embed">
    <iframe
      :src="embedUrl"
      frameborder="0"
      loading="lazy"
      gesture="media"
      allow="autoplay; fullscreen"
      allowautoplay="true"
      allowfullscreen="true"
      style="width: 100%; height: auto; aspect-ratio: 16/9;"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
  computed: {
    embedUrl() {
      return `https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&amp;autoplay=0&amp;showinfo=0&amp;enablejsapi=0`;
    },
  },
};
</script>

<style scoped>
	.youtube-embed {
		width: 100%;
	}
</style>