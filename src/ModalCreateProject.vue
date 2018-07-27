<template>
  <div>
    <b-modal :hide-footer="true" id="modal1" title="Créer un projet" ref="myModalRef">
      <input type="text" class="form-control donnees" v-model="projectName" placeholder="nom projet" size="30">
      <input type="text" class="form-control donnees" v-model="description" placeholder="description" size="30">
      <input type="text" class="form-control donnees" v-model="collaborator" placeholder="collaborateurs" size="30">
      <div>
        <br/>
        <button id="submitProject" type="submit" class="btn btn-success" @click="addProject();modalOff()">Valider
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: "modalCreateProject",
    data() {
      return {
        //v-model dans input
        projectName: '',
        description: '',
        collaborator: ''
      }
    },

    methods: {
      addProject: function () {
        // requête axios (url du projet, paramètre ajouté)
        axios.post('https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg',
          {name: this.projectName, description: this.description, collaborators: []})
          .then(response => {
            // $emit('nomévènement', data) pour créer un évenement (event) pour communiquer avec le composant parent
            this.$emit('newProject', response.data);
          })
          .catch(error => {
            console.log(error);
          })
      },

      //vide les inputs et fait disparaitre la modal après validation
      modalOff: function () {
        this.projectName = "";
        this.description = "";
        this.$refs.myModalRef.hide();
      },
    }
  }

</script>

<style scoped>

</style>
