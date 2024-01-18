const input=document.getElementById('nofwords')
const container=document.querySelector('.container')
const gwords=(n)=>{
    let text=''
    const l="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0;i<n;i++){
        const random=(Math.random()*25).toFixed(0)
        text+=l[random]
    }
    return text;
}

let nofwords;
const getdata=()=>{
   nofwords=Number(input.value)
   console.log(nofwords)
   console.log(gwords((Math.random()*15).toFixed(0)));
   let data='';
   for(i=0;i<nofwords;i++){
   const randomn=(Math.random()*15).toFixed(0)
   data+=gwords(randomn)
   data+=" ";

   console.log(data)
   }
   data=data.slice(0, data.length - 1)
   console.log(data)
   const para=document.createElement('p')
para.setAttribute('class','paras')
para.innerText=data;
container.append(para)
const copy=document.createElement('button')
copy.setAttribute('class','copy')
copy.innerText="Copy"
container.append(copy)
const c0=window.navigator.clipboard.writeText(data)
copyfun=copy.addEventListener('click',c0)
//window.navigator.clipboard.writeText(password)
}


