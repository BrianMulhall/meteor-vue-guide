<template>
  <div class="container"> 
      
<div class="page-header">
	<h1>Enter an Address</h1>
</div>
<div class="row">
  <form id="saveAddress">

      <div class="form-group form-group-lg">
         
          <div class="col">
             <label for="street_number">Street Number</label>
            <input class="form-control" id="street_number" disabled="true"/>
          </div>
          <div class="col">
            <label for="street_number">Street Address</label>
            <input class="form-control" id="route" disabled="true"/>
          </div>
       </div> 

        
      <div class="form-group form-group-lg">
        <div class="col">
          <label for="locality">City</label>
          <input class="form-control" id="locality" disabled="true"/>
        </div>
      </div>
       <div class="form-group form-group-lg">
        <div class="col">
          <label for="administrative_area_level_1">State</label>
          <input class="form-control" id="administrative_area_level_1" disabled="true"/>
        </div>
      </div>
       <div class="form-group form-group-lg">
        <div class="col">
        <label for="postal_code">Zip code</label>
        <input class="form-control" id="postal_code" disabled="true"/>
      </div>
      </div>
      <div class="form-group form-group-lg">
        <div class="col">
          <label for="country">Country</label>
          <input class="form-control" id="country" disabled="true"/>
        </div>
      </div>
      <div class="form-group form-group-lg">
         
          <div class="col">
             <label for="latitude">Latitude</label>
            <input class="form-control" id="latitude" disabled="true"/>
          </div>
          <div class="col">
            <label for="longitude">Longitude</label>
            <input class="form-control" id="longitude" disabled="true"/>
          </div>
       </div> 
    
</form>
<div id="geocodeBtnRow" class="row">
  <div class="col">
    <button type="button" id="geocodeBtn" class="btn btn-primary"> Geocode an Address </button>
    <button type="button" id="saveBtn" class="btn btn-secondary"> Save Address </button>
  </div>
</div>


</div>
  </div>
</template>