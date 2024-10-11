import { useState } from 'react'



  
function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-500'
        style={{ backgroundColor: color }}>

        <div className='flex justify-center fixed flex-wrap bottom-12 inset-x-0 px-2 '>
          <div className='flex justify-center shodow-lg bg-white rounded-full '>
            <h1 className='flex justify-center gap-3 border-solid px-3 py-2 rounded-xl '>
              
              <button  onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                style={{ background: "red" }}>Red</button>
              
              <button  onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                style={{ background: "Green" }}>Green</button>
              
              <button  onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
                style={{ background: "Blue" }}>Blue</button>
              
              <button  onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
                style={{ background: "Yellow" }}>Yellow</button>
              
              <button  onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
                style={{ background: "pink" }}>pink</button>
              
              <button  onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
                style={{ background: "olive" }}>olive</button>
              
              <button  onClick={() => setColor("Lightblue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
                style={{ background: "lightblue" }}>Light blue</button>
              
              <button  onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
                style={{ background: "gray" }}>gray</button>
               
            </h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
