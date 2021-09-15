<header>
  <a sveltekit:prefetch href="/">
    <figure></figure>
    doceazedo911
  </a>

  <navbar>
    <a sveltekit:prefetch href="/" class="active">home</a>
    <a sveltekit:prefetch href="/bot">comandos</a>
    <a sveltekit:prefetch href="/icones">ícones</a>
    <a sveltekit:prefetch href="/prime">sub grátis</a>
  </navbar>
</header>

<main>
  <slot/>
</main>

<footer>
  <a href="https://github.com/doceazedo/doceazedo.com">made by doceazedo. powered by <b>svelte</b> & <b>sveltekit</b>.</a>
</footer>

<style type="text/sass">
  header,
  main,
  footer
    width: 67.5rem
    margin: 0 auto

  header
    display: flex
    align-items: center
    height: 4rem
    border-bottom: 1px solid rgb(#fff, .1)
    cursor: default

    >a
      display: flex
      align-items: center
      color: #fff
      text-decoration: none

      figure
        height: 2rem
        width: 2rem
        margin-right: .5rem
        background-color: #ccc
        border-radius: 50%
        background-image: url('/img/avatar.png')
        background-position: center
        background-repeat: no-repeat
        background-size: cover

    navbar
      display: flex
      margin-left: auto

      a
        display: flex
        align-items: center
        height: 4rem
        color: #fff
        text-decoration: none

        &:not(:last-child)
          margin-right: 2rem

        //&.active

  main
    padding: 3rem 0

  footer
    display: flex
    justify-content: center
    align-items: center
    height: 8rem
    border-top: 1px solid rgb(#fff, .1)

    a
      text-decoration: none
      text-align: center
      color: #fff

  @media screen and (max-width: 768px)
    header
      flex-direction: column
      align-items: center
      height: unset
      width: 100%
      padding: 1rem

      >a
        margin-bottom: 1rem

      navbar
        justify-content: center
        margin: unset
        width: 100%
        font-size: .75rem

        a
          height: unset

          &:not(:last-child)
            margin-right: 1rem

    main,
    footer
      width: 100%
      padding: 1rem
</style>