const data ={
    "name":document.querySelector('#name').value,
    "country":document.querySelector('#country').value,
    "songName":document.querySelector('#songName').value
}
await fetch('/',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)

})
.catch(err=>{
    console.log(`error ${err}`)
})