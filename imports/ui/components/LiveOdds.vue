<template>
  <div class="container">
    <div class="page-header">
      <h1>Sports Betting Information</h1>
    </div>

    <div class="row">
      <form id="requestOddsData">

          <div class="input-field col s12">
            <label>Select a Sport</label>
              <select required>
                <option v-for="sport in sports" :value="sport.value">{{sport.text}}</option>
              </select>  
          </div>
          
          <div class="input-field col s12">
             <label>Select a Region</label>
              <select  id="region" required>
                <option v-for="region in regions" :value="region.value">{{region.text}}</option>
              </select>
          </div>

          <div class="input-field col s12">
            <label>Select a Market</label>
              <select required>
                <option v-for="market in markets" v-bind:value="market.value">{{market.text}}</option>
              </select>
          </div>

           <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        sports: [{value: 1, text:"football"},{value:2, text:"baseball"}],
        regions: [{value:1, text: "region a"},{value: 2 , text: "region b"} ],
        markets: [{value: 1, text: "sample market" }, { value: 2, text: "another test market"}],
        settings: {
            collection: [1,2,3,4,5,6,7,8,9],
            rowsPerPage: 5,
            showFilter: true,   
        }
    };
  },
  methods: {
  }

};
</script>