import React, { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
   const pass = ""
   const str = "ABCDEFIJKLMNOPQRSTUVWXYZabcdefijklmnopqrstuvwxyz"

   if(numberAllow) str+= "0123456789"
   if(charAllow) str+= "!@#$%^&*()[]{}:;<>,./?\|~`_+-="

  }, [length, numberAllow, charAllow, password])

  return (
    <div>
      hello password
    </div>
  )
}

export default App
