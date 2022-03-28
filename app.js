
// Getting elemets 

const displayArea = document.getElementById('display-area')
const sportsBtn = document.getElementById('sportBtn')
const businessBtn = document.getElementById('BusinessBtn')
const technologyBTn = document.getElementById('technologyBTn')
const entertainmentBtn = document.getElementById('entertainmentBtn')
const mainHeadlines = document.getElementById('main-headlines')
const heading = document.getElementById('Heading')


const http = new HttpRequest;

// default page for content on load

http.getData('https://inshortsapi.vercel.app/news?category=all')
.then((data) => {
  const resData = data.data;
  console.log(resData); 


  let displayData = '';
  resData.forEach(element => {
      displayData += `
      <div class="bg-white">
          <div>
            <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
              <div>
                <img class="w-full" style="height: 12rem" src="${element.imageUrl}" />
                <div class="px-4 py-2">
                  <h1 class="text-xl font-gray-700 font-bold">${element.title}</h1>
                  <div class="flex space-x-2 mt-2">
                    <span>
                      <svg  class="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <h3 class="text-lg text-gray-600 font-semibold mb-2">${element.date}</h3>
                  </div>
                  <p class="text-sm tracking-normal">${element.content}}</p>
                  <a type= "button" href="${element.readMoreUrl}" class="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
  });

    displayArea.innerHTML = displayData;
})
.catch((err) => {
  console.log(err);
})

// function for Category wise diployment of news


const newsCategory = (category,newsHeading) => {
  
  http.getData(`https://inshortsapi.vercel.app/news?category=${category}`)
  .then((data) => {
    const resData = data.data;
    // console.log(resData);
  
    heading.innerText = newsHeading

  
    let displayData = '';
    resData.forEach(element => {
        displayData += `
        <div class="bg-white">
            <div>
              <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                <div>
                  <img class="w-full" style="height: 12rem" src="${element.imageUrl}" />
                  <div class="px-4 py-2">
                    <h1 class="text-xl font-gray-700 font-bold">${element.title}</h1>
                    <div class="flex space-x-2 mt-2">
                      <span>
                        <svg  class="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <h3 class="text-lg text-gray-600 font-semibold mb-2">${element.date}</h3>
                    </div>
                    <p class="text-sm tracking-normal">${element.content}}</p>
                    <a type= "button" href="${element.readMoreUrl}" class="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
    });
  
      displayArea.innerHTML = displayData
  })
  .catch((err) => {
    console.log(err);
  })

}

// Category Btn event listners 

sportsBtn.addEventListener('click',() =>newsCategory('sports','Sports News'));
businessBtn.addEventListener('click',() =>newsCategory('business','Business News'));
technologyBTn.addEventListener('click',() =>newsCategory('technology','Tech-News'));
entertainmentBtn.addEventListener('click',() =>newsCategory('entertainment','Entertainment News'));
mainHeadlines.addEventListener('click',() =>newsCategory('main-headlines','Top Headlines'));
