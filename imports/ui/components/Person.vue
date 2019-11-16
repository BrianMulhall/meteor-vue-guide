<template>
<div>
      <div class="page-header">
    <h1>Creating a New Person</h1>
  </div>

    <div class="row">
      <div class="col-lg-12">
  <form id="createPerson">
    
  
  <div id="formGroupName" class="form-group form-group-lg">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Name" required>
    

  </div>

  <div id="formGroupAge" class="form-group form-group-lg">
    <label for="age">Age</label>
    <input type="number" class="form-control" id="age" placeholder="Age" required min="0" max="120">
    

  </div>
  
    <div id="formGroupHeight" class="form-group form-group-lg">
    <label for="height">Height</label>
    <input type="number" class="form-control" id="height" placeholder="Height" required min="0" max="100">
    
    
  </div>
  
   <div id="formGroupWeight" class="form-group form-group-lg">
    <label for="weight">Weight</label>
    <input type="number" class="form-control" id="weight" placeholder="Weight" required min="0" max="1000">
    
    
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>


  </form>
  </div>
</div>

</div>

</template>