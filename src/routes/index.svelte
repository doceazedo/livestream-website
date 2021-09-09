<main>
  <figure></figure>
  <h1>doceazedo911</h1>
  <h2>there is no spoon</h2>

  <div class="list">
    <a href="https://musicwrap.xyz"><img src="/img/emoji-guitar.svg" alt=""> musicwrap.xyz</a>
    <a href="https://lucasfernandes.com.br"><img src="/img/emoji-technologist.svg" alt=""> lucasfernandes.com.br</a>
    <a sveltekit:prefetch href="/bot"><img src="/img/emoji-robot.svg" alt=""> comandos do bot</a>
    <a sveltekit:prefetch href="/icones"><img src="/img/emoji-masks.svg" alt=""> ícones de equipe</a>
  </div>

  <div class="socials">
    <a href="https://www.twitch.tv/doceazedo911"><img src="/img/twitch.svg" alt=""></a>
    <a href="https://github.com/doceazedo"><img src="/img/github.svg" alt=""></a>
    <a href="https://twitter.com/doceazedo911"><img src="/img/twitter.svg" alt=""></a>
    <a href="https://instagram.com/doceazedo911"><img src="/img/instagram.svg" alt=""></a>
    <a href="https://discord.gg/vEGRe2kq8B"><img src="/img/discord.svg" alt=""></a>
  </div>

  <a href="https://github.com/doceazedo/doceazedo.com" class="footer">powered by <b>svelte</b></a>
</main>

<style type="text/sass">
  main
    max-width: 50rem
    margin: 0 auto
    padding: 3rem 1rem

  figure
    height: 8rem
    width: 8rem
    margin: 0 auto 1.5rem
    background-color: #ccc
    border-radius: 50%
    background-image: url('/img/avatar.png')
    background-position: center
    background-repeat: no-repeat
    background-size: cover

  h1
    text-align: center
    font-size: 2rem
    font-weight: 700

  h2
    text-align: center
    margin-bottom: 3rem

  .list
    display: flex
    flex-direction: column
    margin-bottom: 3rem

    a
      display: flex
      justify-content: center
      align-items: center
      height: 3rem
      border-radius: .5rem
      color: #fff
      background-color: rgba(#23272a, .25)
      text-decoration: none
      transition: all .3s ease-out

      &:hover
        transform: scale(.975)

      &:not(:last-child)
        margin-bottom: 1rem

      img
        height: 1.5rem
        margin-right: .5rem

  .socials
    display: flex
    justify-content: space-evenly
    margin-bottom: 3rem

    a
      transition: all .3s ease-out

      &:hover
        transform: scale(.9)

      img
        height: 2rem

  .footer
    display: block
    text-decoration: none
    text-align: center
    color: #fff
</style>