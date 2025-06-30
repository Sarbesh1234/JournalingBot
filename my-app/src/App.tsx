import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [submittedText, setSubmittedText] = useState('')

  const handleSubmit = () => {
    setSubmittedText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Journaling Bot</h1>
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter some text..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 mb-4"
          />
          <button 
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 transition-all mb-4"
          >
            Submit
          </button>
          {submittedText && (
            <p className="text-gray-600 mb-4">You submitted: {submittedText}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
