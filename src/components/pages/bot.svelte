<script>
  import SearchBar from '../common/search-bar.svelte';

  const commands = [
    {
      command: 'discord',
      description: 'Retorna o link do nosso Discord.',
      aliases: ['dc', 'disc']
    },
    {
      command: 'icone <codigo>',
      aliases: ['icon', 'badge', 'team', 'time', 'equipe'],
      description: 'Define um ícone como um emblema personalizado que irá aparecer junto do seu nome no overlay. Mais informações na página "ícones".',
      example: 'icone svelte'
    },
    {
      command: 'musica',
      description: 'Destaca a capa do álbum, foto do artista e envia o link da música que está tocando.',
      aliases: ['music', 'song', 'stream']
    },
    {
      command: 'overlay',
      description: 'Retorna o link do repositório do overlay.',
      aliases: []
    },
    {
      command: 'ping',
      description: 'Retorna "pong".',
      aliases: ['foo']
    },
    {
      command: 'pomodoro',
      description: 'Retorna uma breve explicação sobre o que é a técnica Pomodoro.',
      aliases: []
    },
    {
      command: 'projeto',
      description: 'Retorna informações do projeto atual.',
      aliases: []
    },
    {
      command: 'pronomes <principal>',
      predicate: '[secundário]',
      description: 'Define um ou dois pronomes que irão aparecer juntos do seu nome no overlay. Informe "ela", "ele" e/ou "elu". O segundo parâmetro é opcional.',
      aliases: ['pronome', 'pronoun', 'pronouns'],
      example: 'pronomes ela elu'
    },
    {
      command: 'sh',
      description: 'Comando exclusivo do Doce para mandar shout out para outros streamers.',
      aliases: []
    },
    {
      command: 'social',
      description: 'Retorna uma lista com todas as minhas redes sociais.',
      aliases: ['socials', 'redes']
    },
    {
      command: 'tts',
      predicate: '[voz] <mensagem>',
      description: 'Manda uma mensagem de voz. Mais informações na página "tts".',
      aliases: []
    },
  ];

  let query = '';
</script>

<SearchBar placeholder="Pesquise por comandos..." bind:query={query}/>
<ul class="commands">
  {#each commands as command}
    {#if [ command.command, ...command.aliases ].join(' ').includes(query)}
      <li>
        <h1>
          <span>!{command.command} {#if command.predicate} <span>{command.predicate}</span> {/if}</span>
          {#if command.aliases.length}
            ou ainda:
            <ul>
              {#each command.aliases as alias}
                <li>!{alias}</li>
              {/each}
            </ul>
          {/if}
        </h1>
        <p>{command.description}</p>
        {#if command.example}
          <div><b>Exemplo:</b> !{command.example}</div>
        {/if}
      </li>
    {/if}
  {/each}
</ul>

<style lang="sass">
  .commands > li
    padding: 1rem
    background-color: rgba(#23272a, .25)
    border-radius: .5rem
    color: rgba(#fff, .75)

    &:not(:last-child)
      margin-bottom: 1.5rem

    h1
      display: flex
      font-size: .75rem
      align-items: center
      margin-bottom: 1rem

      >span
        font-size: 1rem
        padding: .25rem .5rem
        margin-right: 1rem
        border-radius: .25rem
        border: 1px solid #ffd479
        color: #ffd479
        background-color: rgba(#ffd479, .1)

      ul
        display: flex
        margin-left: 1rem

        li
          padding: .25rem .5rem
          border-radius: .25rem
          border: 1px solid #ffd479
          color: #fff

          &:not(:last-child)
            margin-right: .5rem

    p
      line-height: 1.5

    div
      margin-top: 1rem
      font-size: .75rem

  @media screen and (max-width: 768px)
    .commands
      li
        &:not(:last-child)
          margin-bottom: 1rem

        h1
          font-size: 0

          >span
            margin: 0

            span
              display: none

          ul
            display: none
</style>