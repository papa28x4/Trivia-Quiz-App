<template>
  <div class="question-box">
      <div v-if="questions.length > 0">
            <p  v-html="questions[qIndex].question"></p>
            <ul>
                <li v-for="(option, index) in randomizeOptions(qIndex)" :key="index"
                    v-html="option"
                    @click="saveChoice(index)"
                    :class="{
                                selected: index === userChoice,
                                correct: submitted && index === correctAnswer,
                                incorrect: submitted && index === userChoice && index !== correctAnswer    
                            }"
                >
                </li>
            </ul>
            <div class="buttons">
                <button 
                    :disabled="!hasSelected || submitted" 
                    @click="markQuestion" 
                    class="btn next"
                >
                    Submit
                </button>
                <button 
                    v-show="qIndex < 9"  
                    :disabled="qIndex === 9 ? true : false" 
                    @click="qIncrement" 
                    class="btn next"
                >
                    {{ submitted? 'Next' : 'Skip'}}
                </button>
                <button v-show="qIndex === 9"  class="btn next">End</button>
            </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
export default {
    name: 'Questions',
    data(){
        return{
            qIndex: 0,
            correctAnswer: '',
            userChoice: '',
            hasSelected: false,
            submitted: false,
            options: [],
            currentIndex: -1,
        }
    },
    computed: {
        ...mapGetters(['questions']),
    },
    methods: {
       ...mapActions([
           'allQuestions',
           'changeQuestion',
           'incrementScore'
       ]),
        qDecrement(){
            if(this.qIndex !== 0) {
                this.qIndex--
                this.changeQuestion('prev')
            }
        },
        qIncrement(){
             if(this.qIndex < 10) {
                this.qIndex++
                this.changeQuestion('next')
                this.hasSelected = false
                this.submitted = false
                this.userChoice = ''
            }
        },
        randomizeOptions(index){
            if(this.currentIndex !== index ){
                const currentQuestion = this.questions[index]
                let options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
                this.options = _.shuffle(options)
                this.correctAnswer = this.options.indexOf(currentQuestion.correct_answer)
                this.currentIndex = index
                 console.log('start', options)
            }
            return this.options
        },
        saveChoice(index){
            this.userChoice = index
            this.hasSelected = true
        },
        markQuestion(){
            if(this.userChoice === this.correctAnswer){
                this.incrementScore(10)
            }
            this.submitted = true;
        }
    },
    created(){
        this.allQuestions()
    }
}
</script>

<style>
ul{
    list-style: none;
}
.buttons{
    display: flex;
    width: 80%;
    justify-content: center;
    margin: 0 auto;
}
.btn{
    width: 100px;
    height: 40px;
    border: 1px solid blueviolet;
    margin: 0 20px;
    border-radius: 5px;
}
.v-application ul{
    padding-left: 0;
}
.question-box{
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 825px;
    margin: 0 auto;
}
.question-box>div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.question-box p{
    margin: 30px 0;
    font-weight: bold;
    font-size: 18px;
    width: 90%;
    line-height: 2rem;
}
.question-box ul{
    margin-bottom: 35px;
    width: 90%;
    max-width: 825px;
}
.question-box li{
    border: 1px solid rgba(128,128,128,0.8);
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: rgba(238,238,238,0.7);
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 1;
}
.question-box li::before{
  content: "";
  position: absolute;
  display: block;
  width: 0%;
  height:100%;
  top:0;
  left: 0;
  border-radius: 10px;
  background-color: rgba(25,118,210, 0.6);
  opacity: 0;
  z-index: -1;
  transition: all 1s ease-in-out;
}
.question-box li:hover{
     background-color: rgba(238,238,238,1);
}
.question-box li.correct,
.question-box li.incorrect,
.question-box li.selected
{
    color: white;
}
.question-box li.correct::before,
.question-box li.incorrect::before,
.question-box li.selected::before{
     opacity: 1;
     width: 100%
}
.question-box li.incorrect::before{
     background-color: red;
}
.question-box li.correct::before{
     background-color: green;
}

:disabled{
    cursor: not-allowed;
    color: grey;
    border: 1px solid grey;
}

</style>