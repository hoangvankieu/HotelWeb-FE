<template>
  <v-row justify="center">
    <v-dialog v-model="dialogVisible" persistent width="1024">
      <v-card>
        <v-container style="height: 1200px;">
          <v-row>
            <v-spacer></v-spacer>
            <v-btn class="mt-2 mr-3" color="red" @click="closeDialog" >
                <v-icon icon="mdi-close"  ></v-icon>
            </v-btn>
            
          </v-row>
          <v-row>

          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  
  data(){
    return {
      dialogVisible:false
    }
  },
  methods:{
    openDialog(){
      
      this.dialogVisible=true;
    },
    closeDialog(){
      this.dialogVisible=false;
      window.history.pushState(null, '', '/room-management')
    }
  }
};
</script>
<style>
</style>