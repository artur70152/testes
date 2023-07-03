import './App.css';
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  
  const config = new Configuration({
    apiKey:'',});
  ;
  
  const openai = new OpenAIApi(config);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        max_tokens: 512,
        temperature: 0,
        prompt: prompt,
      });
  console.log(completion)
      setResponse(completion.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <textarea
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ width: 200, height: 100, textAlign: 'left' }}
        ></textarea>
        <button type='submit' style={{ width: 100, height: 50 }}>Submit</button>
      </form>
      <div>
        <p style={{ border: '1px solid black', padding: '10px' }}>{response}</p>
      </div>
    </div>
  );
}

export default App;