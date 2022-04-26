<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 mrgnbtm">
        <h2>Create Skateboard</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" class="form-control" v-model="name" name="name" id="name" placeholder="Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputBrand1">Brand</label>
                        <input type="text" class="form-control" v-model="brand" name="brand" id="brand" placeholder="Brand" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="exampleInputWidth1">Width</label>
                        <input type="text" class="form-control" v-model="width" name="width" id="width" placeholder="Ex : 7.5" />
                    </div>
                </div>
                <button type="button" @click='createSkateboard()' class="btn btn-success">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateSkateboard',
  data() {
    return {
      name: '',
      brand: '',
      width: ''
    }
  },
  methods: {
      createSkateboard() {
          console.log(this.name)
          const payload = {
              name: this.name,
              brand: this.brand,
              width: this.width
          }
          this.$emit('createSkateboard', payload)
          this.clearForm();
      },
      clearForm() {
          this.name = "";
          this.brand = "";
          this.width = "";
      }
  }
}
</script>