<template>
    <div>
        <!-- <h2>Collections</h2>
    <div class="collection-list">
      <div v-for="collection in collections" :key="collection.id" class="collection-card">
        <img :src="collection.image" alt="Collection Image" />
        <h3>{{ collection.name }}</h3>
        <p>{{ collection.description }}</p>
        <button @click="addToCart(collection)">Add to Cart</button>
      </div>
    </div>

    <form @submit.prevent="createCollection">
      <h2>Create Collection</h2>
      <label for="collectionName">Collection Name:</label>
      <input type="text" id="collectionName" v-model="newCollectionName" required />
      <button type="submit">Create</button>
    </form> -->
    </div>
</template>
<script>

export default {

    name : 'CreateCollection',
  // data() {
  //   return {
  //     collections: [],
  //     newCollectionName: '',
  //   };
  // },
  // mounted() {
  //   // Fetch collections from the API
  //   this.fetchCollections();
  // },
  // methods: {
  //   fetchCollections() {
  //     // Make an API call to retrieve the collections
  //     // Replace 'apiEndpoint' with your actual API endpoint
  //     fetch('apiEndpoint/collections')
  //       .then(response => response.json())
  //       .then(data => {
  //         this.collections = data;
  //       })
  //       .catch(error => {
  //         console.error('Error fetching collections:', error);
  //       });
  //   },
  //   addToCart(collection) {
  //     // Make an API call to add the collection to the cart
  //     // Replace 'apiEndpoint' with your actual API endpoint
  //     fetch('apiEndpoint/cart', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(collection),
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('Collection added to cart:', data);
  //       })
  //       .catch(error => {
  //         console.error('Error adding collection to cart:', error);
  //       });
  //   },
  //   createCollection() {
  //     // Make an API call to create a new collection
  //     // Replace 'apiEndpoint' with your actual API endpoint
  //     fetch('apiEndpoint/collections', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name: this.newCollectionName }),
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('New collection created:', data);
  //         this.newCollectionName = ''; // Clear the input field
  //         this.fetchCollections(); // Refresh the collection list
  //       })
  //       .catch(error => {
  //         console.error('Error creating collection:', error);
  //       });
  //   },
  // },
};
</script>
<style >
.collection-list {
  display: flex;
  flex-wrap: wrap;
}

.collection-card {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.collection-card img {
  width: 100%;
  height: auto;
}

.collection-card h3 {
  margin-top: 10px;
}

.collection-card p {
  margin-bottom: 10px;
}
</style>