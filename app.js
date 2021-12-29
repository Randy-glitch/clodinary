const preview = document.querySelector(".preview");
const up = document.querySelector(".up");
const progressBar = document.querySelector("#progress");

cloudinay_url = 'https://api.cloudinary.com/v1_1/randyweb/image/upload'
cloudinay_up = 'cenyujlx'

up.addEventListener('change', async(e)=>{
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', cloudinay_up)

    const res =  await axios.post(cloudinay_url, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress(e) {
            console.log(Math.round((e.loaded * 100) / e.total))
            const run = Math.round((e.loaded * 100) / e.total);


            progressBar.setAttribute('value', run);
        }
    })
    console.log(res)
    preview.src = res.data.secure_url;

})
