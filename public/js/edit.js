const updateText = document.getElementById('updateButton')

Array.from(updateText).forEach((element)=>{
    element.addEventListener('click', updateEntry)
})


async function updateEntry(){
    const texiId = this.parentNode.dataset.id
    try{
        const res = await fetch('/:id', {
            method: 'put',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({
                specialName: document.getElementsByName("specialName")[0].value,
                placeToDeliver: document.getElementsByName("placeToDeliver")[0].value,
                numberPlate: document.getElementsByName("numberPlate")[0].value,
                number: document.getElementsByName("number")[0].value,
                image: document.getElementsByName('image')[0].value
            })
        })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(error){
        console.error(error);
    }
}