
import {useState, useEffect} from 'react';
import '../logic.css'
import LogOut from './LogOut'
const Logic = () => {

  const [code, setCode] = useState([])
  const [split, splitCode] = useState([])
  const [open, setOpen] = useState(0)
  const [close, setClose] = useState(0)
  const [details, setDetails] = useState('')
  const [details2, setDetails2] = useState('')

  var c = [];
  let co = 0;
  let cc = 0;
  let lineNum = 1;
  var inQotes = "";
  var openIndex = [];
  let linePusher = [];
  var closeIndex = [];
  let lineCount = 1;
  let lineStr = 'line'
  let line2 = 1;
  let bracketStr = 'bracket'
 
  var parens = {
  '{':'}',
  '[': ']',
  '(':')'
  }

   useEffect(() => {
     if (code != ''){
    splitCode(code.split(''))
     }
  },[code]);


 
const mapCode = (e) => {

 split.map((item,i)=>{

  var timer = setTimeout(()=>{
    if(item == "'" || item == '"')
      if(inQotes == item)
        inQotes  = ""
      else inQotes = item  

      if(inQotes)
        return true;

  if (item != '\n'){
      document.getElementById(i).setAttribute('class','green')
  }
  if (item === '\n'){
    lineCount = lineCount + 1;
    line2 = line2 +1;
  }
    switch (item){
          case '{':
          case '(':
          case '[':
            document.getElementById(i).setAttribute('class','red')
         
          openIndex.push(i)
          linePusher.push(line2)
            co = co +1;
           setOpen(co)
            c.push({index: i, type: item})
         

            break;
          case '}':
          case ']':
          case ')':

            cc = cc +1;
           setClose(cc)
            if (c.length >=1 && parens[c[c.length-1].type] == item) {
              document.getElementById(openIndex[openIndex.length-1]).setAttribute('class','green')
              linePusher.pop()
              c.pop()
              openIndex.pop()
              
              setDetails2(`You have ${openIndex.length} extra open brackets`)
              break;
            }else if (c.length >= 2 && parens[c[c.length-2].type] == item){
            //document.getElementById(openIndex[openIndex.length-2]).setAttribute('class','green')
             console.log('not same type',i);  
             break;           
            }
              document.getElementById(i).setAttribute('class','red')
              closeIndex.push(lineCount + ' ')
              if (closeIndex.length > 1){
                lineStr = 'lines'
                bracketStr = 'brackets'
              }
              setDetails(`You have ${closeIndex.length} extra closing ${bracketStr}, ${lineStr}: ` + closeIndex);
              

              break;
  }

},5*i)

})
}

const handleKeyDownEnter = (e) =>{
  if (e.key === 'Enter') {
    mapCode()
  }
}

  return(
    <>
    <div className='rooter'>
    <div className='cont'>
    <div className='status' style={{color: 'blues'}}>   Opened: {open}  Closed: {close}</div>
    <div className='status'> {details}</div>
    <div className='status'> {details2===0?'':details2} </div>
    <LogOut/>
    <button className='mapButton' onClick={mapCode}>Map</button>
    </div>
    <div className='dataContainer'>
    <textarea className='area' placeholder='enter code here' onChange={(e)=>setCode(e.target.value)} onKeyDown={handleKeyDownEnter} />
    <div className='textBox'>
    <span className='line'>1: </span>

    {
      split.map((item,i)=>{
     
        if(item == '\n')
        {
          lineNum = lineNum+1;
          
        return(
          <>         
          <br></br>
          <span className='line'>{lineNum}: </span>        
          </>
        )
    }
        return(
          <span className='char' id={i}>{item}</span>

        )
      })
    }
    </div>
    </div>
    </div>
    </>
  )
}

export default Logic