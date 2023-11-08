<script lang="ts">

    import headerTextStore from '../lib/headerTextStore'

    function handleTextChange(event : Event) {

        const target = event.target as HTMLTextAreaElement;
        let text = target.value;

        if (text == null) 
            text = "";

        headerTextStore.set(text!);
        
    }

</script>

<main class="ioBlock">
  <div class="headerDiv">
    <h3>Paste Header File</h3>
  </div>
  
  <textarea on:input={handleTextChange}></textarea>
</main>


<style>

  .headerDiv {
    display: flex;
    justify-content: center;
    height: 4rem;
  }

  h3 {
    text-align: center;
    color: #2E3440;
  }

  
</style>