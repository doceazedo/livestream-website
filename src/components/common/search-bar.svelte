<script>
  export let placeholder, query;
</script>

<div>
  <input type="text" {placeholder} bind:value={query}>
  <img src="/img/search.svg" alt="">
</div>

<style lang="sass">
  div
    position: relative
    margin-bottom: 3rem

    input
      width: 100%
      margin: 0
      padding: 1rem
      border: none
      border-radius: .5rem
      color: #fff
      background-color: rgba(#23272a, .25)
      outline: none
      transition: all .2s ease

      &:focus
        box-shadow: 0 0 0 1px #fff

    img
      position: absolute
      top: .9rem
      right: 1rem
      opacity: .5
      pointer-events: none
      transition: all .2s ease

    &:focus-within img
      opacity: 1

  @media screen and (max-width: 768px)
    div
      margin-bottom: 1rem
</style>