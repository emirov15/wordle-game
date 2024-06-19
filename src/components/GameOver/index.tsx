import React, { useContext } from 'react'
import { AppContext } from '../../App'

const GameOver = () => {
	const { currentAttempt, gameOver, correctWord } = useContext(AppContext)

	return (
		<div gameOver>
			<h3>
				{gameOver.guessedWord ? 'You Guessed Correctly' : 'oops, Try Next time'}
			</h3>
			<h3>correct Word {correctWord.toUpperCase()}</h3>
			{gameOver.guessedWord && (
				<h3>
					You guessed in{currentAttempt.attempt()}
					{currentAttempt.attempt > 2 ? 'attempts' : 'attempt'}
				</h3>
			)}
		</div>
	)
}

export default GameOver
