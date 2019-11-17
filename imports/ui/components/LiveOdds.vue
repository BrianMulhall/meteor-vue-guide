<template>
  <div class="container">
    <div class="page-header">
      <h1>Sports Betting Information</h1>
    </div>

    <div class="row">
      <form id="requestOddsData">
        <fieldset>
          <div class="col s12">
            <legend>Get the Odds:</legend>
          </div>
          <div class="col s12">
            <div class="form-group">
              <select name="sport" class="form-control" id="sport" required>
                <option disabled selected>Select a Sport</option>
                <option v-for="sport in sports" v-bind:value="sport.value">{{sport.text}}</option>
              </select>
            </div>
          </div>
          <div class="col s12">
            <div class="form-group">
              <select class="form-control" id="region" required>
                <option disabled selected>Select a Region</option>
                <option v-for="region in regions" v-bind:value="region.value">{{region.text}}</option>
              </select>
            </div>
          </div>
          <div class="col s12">
            <div class="form-group">
              <select class="form-control" id="market" required>
                <option disabled selected>Select a Market</option>
                <option v-for="market in markets" v-bind:value="market.value">{{market.text}}</option>
              </select>
            </div>
          </div>
          <div class="col s12">
            <button type="submit" class="pull-right btn btn-primary">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
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