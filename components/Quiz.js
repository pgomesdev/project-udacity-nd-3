import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import FrontCard from './FrontCard'
import BackCard from './BackCard'

class Quiz extends Component {
  state = {
    isQuestion: true,
    currentQuestion: 0,
    counter: 0,
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
      return (
        <View>
          <Text>You got {this.state.counter} questions right!</Text>
        </View>
      )
    }

    return (
      <View>
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
