<script>
  import HeaderInput from "./HeaderInput.svelte";
  import ImplementationOutput from "./ImplementationOutput.svelte";
</script>

<h1>Header to Implementation Scaffold</h1>
<main>
  <HeaderInput></HeaderInput>
  <ImplementationOutput></ImplementationOutput>
</main>

<style>

  :global(body) {
    background-color: #D8DEE9;
  }

  :global(*) {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  }

  :global(textarea) {
    width: 100%;
    height: 400px;
    margin-bottom: 10px;
    font-size: medium;

    resize: none;

    margin-left: auto;
    margin-right: auto;
  }

  :global(.ioBlock) {
    width: 85%;
    max-width: 600px;
  }

  h1 {
    text-align: center;
    color: #2E3440
;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-flow: column;
    align-items: center;
  }

  @media (min-width: 1400px) {
    main {
      flex-direction: row;
      justify-content: center;
      width: 100vw;
    }

    :global(.ioBlock) {
      margin-left: 4rem;
      margin-right: 4rem;
    }
  }
</style>