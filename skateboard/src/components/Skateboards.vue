<template>
    <div class="container">
        <h2>Skateboards</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Skateboard Id</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Width</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in skateboards" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.brand }}</td>
                  <td>{{ item.width }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Skateboards',
        props: ['skateboards']
     }
</script>