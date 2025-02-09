import React from 'react'

export const Summary = ({
  environmentInput,
  budgetInput,
  dayInput,
  travelInput
}) => {
  return (
    <main className='summary-container'>

      <h3 className='question-number' tabIndex='0'>Question 1</h3>
      <p className='summary-text' tabIndex='0'>You prefer trips to the {environmentInput}</p>

      <h3 className='question-number' tabIndex='0'>Question 2</h3>
      {budgetInput === '0-5000 kr' && (
        <p className='summary-text' tabIndex='0'>You spend {budgetInput} on travels per year</p>
      )}
      {budgetInput === '5000-10.000 kr' && (
        <p className='summary-text' tabIndex='0'>You spend {budgetInput} on travels per year</p>
      )}
      {budgetInput === '10.000-20.000 kr' && (
        <p className='summary-text' tabIndex='0'>You spend {budgetInput} on travels per year</p>
      )}
      {budgetInput === 'More' && (
        <p className='summary-text' tabIndex='0'>You like to spend a lot of money on travels </p>
      )}

      <h3 className='question-number' tabIndex='0'>Question 3</h3>
      {dayInput === '1-2 days' && (
        <p className='summary-text' tabIndex='0'>You like to go away for {dayInput} </p>
      )}
      {dayInput === 'A weekend' && (
        <p className='summary-text' tabIndex='0'> {dayInput} is perfect length for an environment change</p>
      )}
      {dayInput === '1-2 weeks' && (
        <p className='summary-text' tabIndex='0'>You prefer to go away for {dayInput}</p>
      )}
      {dayInput === 'A month or longer' && (
        <p className='summary-text' tabIndex='0'>You want to enjoy a vaccation for {dayInput} </p>
      )}

      <h3 className='question-number' tabIndex='0'>Question 4</h3>
      {travelInput === 'Yes' && (
        <p className='summary-text' tabIndex='0'>You have booked a travel for this year</p>
      )}
      {travelInput === 'No' && (
        <p className='summary-text' tabIndex='0'>You have not booked a travel for this year</p>
      )}


      <h3 className='summary-title' tabIndex='0'>Thank you for participating in the survey</h3>


    </main>
  )
}