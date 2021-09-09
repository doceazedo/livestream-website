<script>
  import Layout from '../components/Layout.svelte';
</script>

<Layout>
  <ul>
    <li>
      <h1><span>1</span><a href="https://gaming.amazon.com/intro" target="_blank">Clique aqui</a> para acessar a página do Prime e clique para experimentar</h1>
      <img src="/img/prime-1.webp" alt="">
    </li>
    <li>
      <h1><span>2</span>Acesse sua conta da Amazon ou registre uma nova</h1>
      <img src="/img/prime-2.webp" alt="">
    </li>
    <li>
      <h1><span>3</span><a href="https://www.twitch.tv/doceazedo911" target="_blank">Volte ao meu canal</a> e clique no botão de inscrição</h1>
      <img src="/img/prime-3.webp" alt="">
    </li>
    <li>
      <h1><span>4</span>Na seção do Prime, clique no botão escrito "Inscrever-se gratuitamente"</h1>
      <img src="/img/prime-4.webp" alt="">
    </li>
    <li>
      <h1><span>5</span>Opcional: <a href="https://discord.gg/vEGRe2kq8B">Junte-se ao Discord</a> e conecte com sua Twitch para ganhar um cargo</h1>
      <video autoplay muted loop>
        <source src="/video/prime-5.webm" type="video/webm">
      </video>
    </li>
    <li>
      <p>Obrigado e não se esqueça de cancelar sua inscrição antes dos 30 dias ou continue com ela ativa para seguir como sub e aproveitar todas as vantagens de ser Prime!</p>
    </li>
  </ul>
</Layout>

<style type="text/sass">
  ul li
    padding: 1rem
    background-color: rgba(#23272a, .25)
    border-radius: .5rem

    &:not(:last-child)
      margin-bottom: 1.5rem

    h1
      display: flex
      align-items: center
      margin-bottom: 1rem
      line-height: 1.25
      white-space: pre

      span
        display: flex
        justify-content: center
        align-items: center
        flex-shrink: 0
        height: 2.5rem
        width: 2.5rem
        margin-right: 1rem
        border-radius: 50%
        font-weight: 700
        background-color: #ffd479
        color: #363636

      a
        color: #fff

    img,
    video
      display: flex
      width: 100%
      border-radius: .5rem
      pointer-events: none
      user-select: none

    p
      margin: 0
      text-align: center
</style>