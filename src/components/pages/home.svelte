<script>
  import simpleIcons from 'simple-icons';

  const socialIcons = [
    { url: 'https://www.twitch.tv/doceazedo911', icon: simpleIcons.Get('twitch')               },
    { url: 'https://github.com/doceazedo',       icon: simpleIcons.Get('github'),   hex: 'aaa' },
    { url: 'https://twitter.com/doceazedo911',   icon: simpleIcons.Get('twitter')              },
    { url: 'https://instagram.com/doceazedo911', icon: simpleIcons.Get('instagram')            },
    { url: 'https://last.fm/user/doceazedo911',  icon: simpleIcons.Get('lastdotfm')            },
    { url: 'https://discord.gg/vEGRe2kq8B',      icon: simpleIcons.Get('discord')              },
  ];
</script>

<main>
  <figure></figure>
  <h1>doceazedo911</h1>
  <h2>the cake is a lie</h2>

  <div class="list">
    <a href="https://semaninha.com"><img src="/assets/img/emoji-guitar.svg" alt=""> semaninha</a>
    <a href="https://lucasfernandes.com.br"><img src="/assets/img/emoji-technologist.svg" alt=""> lucasfernandes.com.br</a>
    <a href="/bot"><img src="/assets/img/emoji-robot.svg" alt=""> comandos do bot</a>
    <a href="/icones"><img src="/assets/img/emoji-masks.svg" alt=""> ícones de equipe</a>
  </div>

  <div class="socials">
    {#each socialIcons as social}
      <a href={social.url} style="--color: #{social.hex || social.icon.hex}">
        {@html social.icon.svg}
      </a>
    {/each}
  </div>
</main>

<style lang="sass">
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
    background-image: url('/assets/img/avatar.webp')
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
    color: rgba(#fff, .75)

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

      :global(svg)
        height: 2rem
        fill: #fff
        transition: all .3s ease-out

        &:hover
          fill: var(--color)
</style>