import axios from 'axios'
import _ from 'lodash'

const state = {
    questions: [
       
    ],
    totalSet: 10,
    qNo: 1,
    score: 0
}

const getters = {
    questions(state){
        state.questions = _.shuffle(state.questions)
        return state.questions
    },
    totalSet(state){
        return state.totalSet
    },
    qNo(state){
        return state.qNo
    },
    score(state){
        return state.score
    }
}

const actions = {
    allQuestions: async({ commit })=>{
        const response = await axios.get('http://localhost:4000/results')
        commit('SET_QUESTIONS', response.data)
    },
    changeQuestion: ({ commit }, payload)=>{
       if(payload === 'next'){
            commit('INCREMENT_QUESTION', payload)
       }else if(payload === 'prev'){
            commit('DECREMENT_QUESTION', payload)
       }
    },
    incrementScore: ({ commit }, payload)=>{
        commit('INCREMENT_SCORE', payload)
    }
}

const mutations = {
    SET_QUESTIONS : (state, questions)=>{
        state.questions = questions
    },
    INCREMENT_QUESTION : (state)=>{
        state.qNo++
    },
    DECREMENT_QUESTION : (state)=>{
        state.qNo--
    },
    INCREMENT_SCORE: (state, points)=>{
        state.score += points
    }
}

const questions = {
    state,
    getters,
    actions,
    mutations
}


export default questions