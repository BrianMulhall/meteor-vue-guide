<template>
<div class="container" >
      <div class="carousel">
    <a class="carousel-item" href="#two!"><img src="driggs.jpeg"></a>
    <a class="carousel-item" href="#three!"><img src="goya.jpeg"></a>
    <a class="carousel-item" href="#four!"><img src="gustav.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="kandinsky.jpeg"></a>
  </div>

     <input type="text" class="datepicker">
  
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