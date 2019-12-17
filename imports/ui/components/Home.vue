<template>
<div class="container" >
      <div class="carousel">
    <a class="carousel-item" href="#two!"><img src="driggs.jpeg"></a>
    <a class="carousel-item" href="#three!"><img src="goya.jpeg"></a>
    <a class="carousel-item" href="#four!"><img src="gustav.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="kandinsky.jpeg"></a>
  </div>     
  <a class="btn btn-block btn-social btn-github">
  <span class="fa fa-github"></span>
  Sign in with Github
</a>
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
      M.AutoInit(); 
    }


}

</script>