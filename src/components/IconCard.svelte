<script>
  import tinycolor from 'tinycolor2';

  export let slug, svg, hex, toast = false;

  const createRipple = event => {
    const button = event.currentTarget;
    const btnRect = button.getBoundingClientRect();

    const circle = document.createElement('span');
    const diameter = Math.max(btnRect.width, btnRect.height);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btnRect.left + radius)}px`;
    circle.style.top = `${event.clientY - (btnRect.top + radius)}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  }

  const handleClick = event => {
    createRipple(event);
    navigator.clipboard.writeText(`!icone ${slug}`);

    toast = true;
    setTimeout(() => toast = false, 5000);
  }
</script>

<li on:click={handleClick} style="--color: #{tinycolor(`#${hex}`).getBrightness() > 50 ? hex : 'fff'}">
  {@html svg}
  {slug.length > 14 ? `${slug.substring(0, 12)}...` : slug}
</li>

<style type="text/sass">
  li
    position: relative
    overflow: hidden
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    height: 5rem
    background-color: rgba(#23272a, .25)
    color: rgba(#fff, .5)
    border-radius: .5rem
    font-size: .75rem
    cursor: pointer
    transition: all .3s ease-out

    :global(.ripple)
      position: absolute
      border-radius: 50%
      transform: scale(0)
      animation: ripple .6s linear
      background-color: rgba(#fff, .1)

    &:hover
      transform: scale(1.075)

      :global(svg)
        fill: var(--color)

    :global(svg)
      height: 1.5rem
      margin-bottom: .5rem
      fill: #fff
      transition: all .3s ease-out

  @keyframes ripple
    to
      transform: scale(4)
      opacity: 0
</style>