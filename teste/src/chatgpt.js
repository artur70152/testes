import './App.css';
import { useState } from 'react';
import {Configuration,OpenAIApi} from 'openai'

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [frag, setfrag]=useState('')
  const[Image,Setimage]=useState('')

  const config = new Configuration({
    apiKey:'',});
const openai = new OpenAIApi(config);

const generateImage=async ()=>{
const res=await openai.createImage({
  prompt:prompt,
  n:1,
  size:'512x512',
})
Setimage(res.data.data[0].url)
}

const generatetext=async()=>{
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });

  setResponse(completion.data.choices[0].text);

}



const handleSubmit = async (e) => {
  setfrag(prompt)
  setPrompt('')
  Setimage('')
  setResponse('')
  e.preventDefault();
  
  generatetext()
  generateImage()
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
        <h3>{frag}</h3>
      </form>
      <div>
        <p style={{ border: '1px solid black', padding: '10px' }}>{response}</p>
        <img src={Image} alt={Image}/>
      </div>
    
    </div>
  );
}

export default App;