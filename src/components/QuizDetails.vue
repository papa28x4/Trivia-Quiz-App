<template>
  <div >
      <div id="statistics">      
          <div class="score">Score: <span>{{score}}</span></div>
          <div class="title">Trivia Questions</div>
          <div class="question-status"><span>{{qNo}}</span>/<span>{{totalSet}}</span></div>
      </div>
      <hr />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'QuizDetails',
    computed: {
        ...mapGetters([
            'totalSet',
            'qNo',
            'score'
        ])
    }
}
</script>

<style scoped>
    #statistics{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>