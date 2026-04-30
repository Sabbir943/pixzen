export const getPhotos=async()=>{
const res=await fetch('https://pixzen-eight.vercel.app/data.json');
return res.json();
}