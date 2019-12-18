<template>
  <div class="container">
    <div class="page-header">
      <h1>User Profile</h1>
    </div>

    <div class="card">
      <div class="card-content">
        <form id="editUserProfile" @submit.prevent="editUserProfile">
          <div class="row">
            <ValidationProvider
              v-slot="{ errors }"
              name="address"
              vid="address"
            >
              <div class="input-field col s12">
                <label class="active" for="address">Address</label>
                <input
                  id="address"
                  type="address"
                  class="validate"
                  v-model="address"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="row">
            <ValidationProvider
              v-slot="{ errors }"
              name="addressCont"
              vid="addressCont"
            >
              <div class="input-field col s12">
                <label class="active" for="addressCont">Address (cont)</label>
                <input
                  id="addressCont"
                  type="addressCont"
                  class="validate"
                  v-model="addressCont"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="row">
            <ValidationProvider
              v-slot="{ errors }"
              name="addressCont"
              vid="addressCont"
            >
              <div class="input-field col s12">
                <label class="active" for="addressCont">City</label>
                <input
                  id="addressCont"
                  type="addressCont"
                  class="validate"
                  v-model="addressCont"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="row">
            <ValidationProvider
              v-slot="{ errors }"
              name="addressCont"
              vid="addressCont"
            >
              <div class="input-field col s12">
                <label class="active" for="addressCont">State</label>
                <input
                  id="addressCont"
                  type="addressCont"
                  class="validate"
                  v-model="addressCont"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="row">
            <ValidationProvider
              v-slot="{ errors }"
              name="zipcode"
              vid="zipcode"
            >
              <div class="input-field col s12">
                <label class="active" for="zipcode">Zipcode</label>
                <input
                  id="zipcode"
                  type="zipcode"
                  class="validate"
                  v-model="zipcode"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
