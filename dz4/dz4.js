// Необходимо реализовать отрисовку 10 картинок собак из API
// https://dog.ceo/dog-api/ с интервалом в 3 секунды

const urlDog = "https://dog.ceo/api/breeds/image/random";
const imgBox = document.querySelector(".image-box");


const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

try {
  async function fotoDogs(count){
      const fotoDog = await getData(urlDog);
      imgBox.innerHTML = `<div><img src="${fotoDog.message}" alt=""></div>`;
      
      if(count < 30){
          setTimeout(fotoDogs, 1000, ++count);
      }
  }
  setTimeout(fotoDogs, 1000, 1);
  
} catch (error) {
  console.error("error");
}
