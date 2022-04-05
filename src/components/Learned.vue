<template>
<div class="container max-h-screen scroll-smooth">
<div class="bg-secondary flex justify-center align-middle items-center flex-col w-screen h-[500px]">

<table class="table-auto">
  <thead>
    <tr>
      <th>Conteúdo</th>
      <th>Aprendido</th>      
    </tr>
  </thead>
 <tbody class="bg-primary text-secondary ">
    <tr>
      <td v-for="item in items" class="bg-tomato">{{item}}</td>
      <td class="bg-tomato">Malcolm Lockyer</td>
        
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
    
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>

    </tr>
  </tbody>
</table>
</div>
    
</div>
</template>


<script>
import learned from '../components/studies.json'

export default {
    data() {
        return {
             items:learned
        }
    }
}
</script>