<script>
  const polly = [
    {
      lang: 'Alemão',
      voices: [
        { id: 'marlene', gender: 'f' },
        { id: 'vicki', gender: 'f' },
        { id: 'hans', gender: 'm' },
      ]
    },
    {
      lang: 'Árabe',
      voices: [
        { id: 'zeina', gender: 'f' },
      ]
    },
    {
      lang: 'Chinês',
      voices: [
        { id: 'zhiyu', gender: 'f' },
      ]
    },
    {
      lang: 'Coreano',
      voices: [
        { id: 'seoyeon', gender: 'f' },
      ]
    },
    {
      lang: 'Dinamarquês',
      voices: [
        { id: 'naja', gender: 'f' },
        { id: 'mads', gender: 'm' },
      ]
    },
    {
      lang: 'Holandês',
      voices: [
        { id: 'lotte', gender: 'f' },
        { id: 'ruben', gender: 'm' },
      ]
    },
    {
      lang: 'Inglês (australiano)',
      voices: [
        { id: 'nicole', gender: 'f' },
        { id: 'olivia', gender: 'f' },
        { id: 'russell', gender: 'm' },
      ]
    },
    {
      lang: 'Inglês (britânico)',
      voices: [
        { id: 'amy', gender: 'f' },
        { id: 'emma', gender: 'f' },
        { id: 'brian', gender: 'm' },
      ]
    },
    {
      lang: 'Inglês (indiano)',
      voices: [
        { id: 'aditi', gender: 'f' },
        { id: 'raveena', gender: 'f' },
      ]
    },
    {
      lang: 'Inglês (neozelandês)',
      voices: [
        { id: 'aria', gender: 'f' },
      ]
    },
    {
      lang: 'Inglês (sul-africano)',
      voices: [
        { id: 'ayanda', gender: 'f' },
      ]
    },
    {
      lang: 'Inglês (americano)',
      voices: [
        { id: 'ivy', gender: 'f' },
        { id: 'joanna', gender: 'f' },
        { id: 'kendra', gender: 'f' },
        { id: 'kimberly', gender: 'f' },
        { id: 'salli', gender: 'f' },
        { id: 'joey', gender: 'm' },
        { id: 'justin', gender: 'm' },
        { id: 'kevin', gender: 'm' },
        { id: 'matthew', gender: 'm' },
      ]
    },
    {
      lang: 'Inglês (galês)',
      voices: [
        { id: 'geraint', gender: 'm' },
      ]
    },
    {
      lang: 'Francês',
      voices: [
        { id: 'celine', gender: 'f' },
        { id: 'lea', gender: 'f' },
        { id: 'mathieu', gender: 'm' },
      ]
    },
    {
      lang: 'Francês (canadense)',
      voices: [
        { id: 'chantal', gender: 'f' },
        { id: 'gabrielle', gender: 'f' },
      ]
    },
    {
      lang: 'Galês',
      voices: [
        { id: 'gwyneth', gender: 'f' },
      ]
    },
    {
      lang: 'Hindi',
      voices: [
        { id: 'aditi', gender: 'f' },
      ]
    },
    {
      lang: 'Islandês',
      voices: [
        { id: 'dora', gender: 'f' },
        { id: 'karl', gender: 'm' },
      ]
    },
    {
      lang: 'Italiano',
      voices: [
        { id: 'carla', gender: 'f' },
        { id: 'bianca', gender: 'f' },
        { id: 'giorgio', gender: 'm' },
      ]
    },
    {
      lang: 'Japonês',
      voices: [
        { id: 'mizuki', gender: 'f' },
        { id: 'takumi', gender: 'm' },
      ]
    },
    {
      lang: 'Norueguês',
      voices: [
        { id: 'liv', gender: 'f' },
      ]
    },
    {
      lang: 'Polonês',
      voices: [
        { id: 'ewa', gender: 'f' },
        { id: 'maja', gender: 'f' },
        { id: 'jacek', gender: 'm' },
        { id: 'jan', gender: 'm' },
      ]
    },
    {
      lang: 'Português (brasileiro)',
      primary: true,
      voices: [
        { id: 'camila', gender: 'f' },
        { id: 'vitoria', gender: 'f' },
        { id: 'ricardo', gender: 'm' },
      ]
    },
    {
      lang: 'Português (europeu)',
      voices: [
        { id: 'ines', gender: 'f' },
        { id: 'cristiano', gender: 'm' },
      ]
    },
    {
      lang: 'Romeno',
      voices: [
        { id: 'carmen', gender: 'f' },
      ]
    },
    {
      lang: 'Russo',
      voices: [
        { id: 'tatyana', gender: 'f' },
        { id: 'maxim', gender: 'm' },
      ]
    },
    {
      lang: 'Espanhol (europeu)',
      voices: [
        { id: 'conchita', gender: 'f' },
        { id: 'lucia', gender: 'f' },
        { id: 'enrique', gender: 'm' },
      ]
    },
    {
      lang: 'Espanhol (mexicano)',
      voices: [
        { id: 'mia', gender: 'f' },
      ]
    },
    {
      lang: 'Espanhol (americano)',
      voices: [
        { id: 'lupe', gender: 'f' },
        { id: 'penelope', gender: 'f' },
        { id: 'miguel', gender: 'm' },
      ]
    },
    {
      lang: 'Sueco',
      voices: [
        { id: 'astrid', gender: 'f' },
      ]
    },
    {
      lang: 'Turco',
      voices: [
        { id: 'filiz', gender: 'f' },
      ]
    },
  ];
</script>

<p>Além do TTS que é possível resgatar através dos pontos do canal, existe ainda o comando <b>!tts</b> que permite usar uma voz personalizada, de um dos seguintes provedores:</p>

<ul>
  <li>Você pode usar <span>!tts &lt;mensagem&gt;</span> para enviar uma mensagem com a voz feminina padrão do Google</li>
  <li>Você pode usar <span>!tts perola &lt;mensagem&gt;</span> para enviar uma mensagem com a voz da Pérola da Cybervox</li>
  <li>Você pode usar <span>!tts &lt;codigo&gt; &lt;mensagem&gt;</span> para enviar uma mensagem com uma das vozes abaixo:</li>
</ul>

<table class="table">
  <thead>
    <tr>
      <th>Idioma</th>
      <th>Nome / Código</th>
      <th>Tipo de voz</th>
    </tr>
  </thead>
  <tbody>
    {#each polly as lang}
      <tr class:primary={lang.primary}>
        <td>{lang.lang}</td>
        <td>
          {#each lang.voices as voice}
            {voice.id}<br>
          {/each}
        </td>
        <td>
          {#each lang.voices as voice}
            {voice.gender == 'm' ? '🧢 Masculina' : '🎀 Feminina'}<br>
          {/each}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="sass">
  p  
    margin-bottom: 3rem
    line-height: 1.5

  ul
    list-style: disc outside
    margin-left: 1rem
    margin-top: 1rem
    margin-bottom: 3rem
    line-height: 2.5

    span
      padding: .25rem .5rem
      margin-right: .25rem
      border-radius: .25rem
      border: 1px solid #ffd479
      color: #ffd479
      background-color: rgba(#ffd479, .1)
  
  table
    width: 100%
    border: 1px solid #1a1a1a
    font-size: 12pt
    border-collapse: collapse

    thead th,
    tr.primary
      background-color: #0f0f0f

    th,
    td
      padding: .5em
      border: 1px solid #1a1a1a
      vertical-align: top
      line-height: 1.5

    td:first-child,
    td:nth-child(2)
      width: 16rem
</style>