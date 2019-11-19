<template>
<div class="container" >
      <div class="carousel">
    <a class="carousel-item" href="#two!"><img src="driggs.jpeg"></a>
    <a class="carousel-item" href="#three!"><img src="goya.jpeg"></a>
    <a class="carousel-item" href="#four!"><img src="gustav.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="kandinsky.jpeg"></a>
  </div>


  <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>

  
</div>

</template>


<script>
export default {
    data () {
        return {
        }
    },
    methods: {
      
    },
    mounted() {
      M.AutoInit(); // That way, it is only initialized when the component is mounted
    }


}

</script>