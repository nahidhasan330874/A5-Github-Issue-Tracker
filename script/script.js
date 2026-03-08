 const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML= "";

 async function loadCards() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
     displayCards(data.data)
 }
  

 function displayCards(cards) {
    console.log(cards);
    cards.forEach((card) => {
        console.log(card)
   
   const allCard = document.createElement("div")
   allCard.innerHTML=`  <div class=" bg-base-100 shadow-sm rounded-md h-full w-full object-cover ">
         <div class="p-4 space-y-3">
            <div class="flex justify-between items-center ">
          <img src="./images/Open-Status.png" alt="" />
          <h6 class=" bg-[#FEECEC] px-3 text-[12px] font-semibold rounded-2xl">${card.priority}</h6>
         </div>

        <div class = " space-y-2">
            <h2 class="font-semibold text-[14px]">${card.title}</h2>
            <p class="text-[#64748B] text-[12px] line-clamp-2 ">${card.description} </p>
        </div>
        <div class="flex items-center gap-4">
            <h2 class="flex items-center text-[12px] font-medium gap-1 text-[#EF4444] bg-[#FEECEC] px-2 rounded-xl"><span class="w-3"><img src="./images/bug.png" alt=""></span> Bug</h2>
            <h2 class="flex items-center text-[12px]  font-medium gap-1 text-[#D97706] bg-[#fff6d0] px-2 rounded-xl"><span class="w-4"><img src="./images/bug-2.png" alt=""></span>Help wanted</h2>
        </div>
         </div>
         
            <hr class="border-gray-300">
        
        <div class="p-4">
            <p class="text-gray-400 text-[12px]">john_doe</p>
            <p class="text-gray-400 text-[12px]">2024-01-15T10:30:00Z</p>
        </div>
       </div>`

       cardContainer.append(allCard);
     })
 }

  loadCards() 