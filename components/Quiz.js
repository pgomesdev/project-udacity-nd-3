import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import FrontCard from './FrontCard'
import BackCard from './BackCard'
import QuizPoints from './QuizPoints'
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  state = {
    isQuestion: true,
    currentQuestion: 0,
    counter: 0,
  }

  restartQuiz = () => {
    this.setState(() => ({
      isQuestion: true,
      currentQuestion: 0,
      counter: 0,
    }))
  }

  backToDeck = (id) => {
    this.props.navigation.navigate(
      'DeckDetail',
      { id }
    )
  }

  checkAnswer = () => {
    this.setState(() => ({
      isQuestion: false,
    }))
  }

  submitAnswer = (isCorrect) => {
    if (isCorrect) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }))
    }

    this.setState((prevState) => ({
      isQuestion: true,
      currentQuestion: prevState.currentQuestion + 1,
    }))
  }

  render() {
    const { id } = this.props.navigation.state.params
    const deck = this.props.decks[id]
    const questions = deck.questions

    if (!questions[this.state.currentQuestion] && this.state.currentQuestion > 0) {
      clearLocalNotifications()
        .then(setLocalNotification)

      return (
        <QuizPoints
          points={this.state.counter}
          restartQuiz={this.restartQuiz}
          backToDeck={() => this.backToDeck(id)}
        />
      )
    }

    return (
      <View>
        <Text>{this.state.currentQuestion + 1}/{questions.length}</Text>
        {this.state.isQuestion
        ? <FrontCard
            question={questions[this.state.currentQuestion].question}
            checkAnswer={this.checkAnswer}
          />
        : <BackCard
            answer={questions[this.state.currentQuestion].answer}
            submitAnswer={this.submitAnswer}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Quiz)
