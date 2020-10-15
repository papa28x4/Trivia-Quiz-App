<template>
  <div class="container">
      <quiz-details/>
      <questions />
  </div>
</template>

<script>
import QuizDetails from '@/components/QuizDetails'
import Questions from '@/components/Questions'
export default {
    name: 'Quiz',
    components: {
        QuizDetails,
        Questions
    }
}
</script>

<style scoped>
    .container{
        width: 1150px;
    }
</style>