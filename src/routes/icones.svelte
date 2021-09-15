<script>
  import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
  import simpleIcons from 'simple-icons';
  import Layout from '../components/Layout.svelte';
  import SearchBar from '../components/SearchBar.svelte';
  import IconCard from '../components/IconCard.svelte';

  let query = '';
  let showToast = false;
</script>

<Layout>
  <p>Mostre o orgulho que você tem por sua equipe! Clique em um dos {Object.entries(simpleIcons).length} ícones abaixo para copiar um comando e colar no chat da Twitch para defini-lo como seu novo emblema. Ícones fornecidos por <a href="https://simpleicons.org" target="_blank">Simple Icons</a>.</p>

  <SearchBar placeholder="Pesquise por ícones..." bind:query={query}/>

  <ul class="icons">
    {#each Object.entries(simpleIcons) as [key, icon]}
      {#if `${icon.slug} ${icon.title}`.includes(query)}
        <IconCard slug={icon.slug} svg={icon.svg} hex={icon.hex} bind:toast={showToast}/>
      {/if}
    {/each}
  </ul>

  {#if showToast}
    <div class="toast" transition:fly={{duration: 500, x: -16, opacity: 0, easing: quintInOut}}>
      Comando copiado, agora é só colar no chat! <img src="/img/emote-hype.png" alt="">
    </div>
  {/if}
</Layout>

<style type="text/sass">
  p
    margin-bottom: 3rem
    line-height: 1.5

    a
      color: #fff

  .icons
    display: grid
    grid-template-columns: repeat(8, 1fr)
    grid-column-gap: 1rem
    grid-row-gap: 1rem

  .toast
    position: fixed
    bottom: 1rem
    left: 1rem
    display: flex
    align-items: center
    padding: .5rem 1rem
    border-radius: .5rem
    background-color: #198754
    cursor: default

    img
      // height: 3rem
      margin-left: .5rem

  @media screen and (max-width: 768px)
    p
      margin: 2rem 0 3rem
      color: rgba(#fff, .75)

    .icons
      grid-template-columns: repeat(2, 1fr)
</style>