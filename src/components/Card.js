import React from 'react';
import card1 from '../assets/C.png';
import card2 from '../assets/T.png';
import card3 from '../assets/A.png';



const Card = () => {
  

  
  return (
   
    <div className='' id='card'>
      <div className=" pt-[3rem] rounded-t-[5rem]  dark:bg-black dark:text-white duration-300 headline mt-7 flex flex-col items-center text-[2rem]">
        <span>
          <b>Our Categories</b>
        </span>
      </div>
     <section className="wrapper dark:bg-black dark:text-white duration-300 flex items-center justify-between px-[5rem] rounded-b-[5rem]  w-[100%] h-[40rem] relative ">
      <div class="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
        
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={card1} class="w-full h-full" />
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 class="text-3xl font-semibold">CHILDREN'S</h1>
              {/* <p class="my-2">9.0 Rating</p> */}
              <p>
              Welcome to the Enchanted Storybook Library, 
              a place where the pages of each book transform into magical adventures!
              </p>
              <button
                  
               class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Get the Book
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={card2} class="w-full h-full" />
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 class="text-3xl font-semibold"> TEENAGERS</h1>
             
              <p>
              "Step into the Teen Imagination Zone at our library, a realm where words are portals to
               new worlds and emotions resonate on every page."
              </p>
              <button
                  
               class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Get the Book
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={card3} class="w-full h-full" />
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 class="text-3xl font-semibold">ADULT</h1>
              
              <p>
              "Welcome to our Adult Reading Haven, a place where the power of words transcends age and the literary landscape 
              is as diverse as the imaginations it captivates"
              </p>
              <button
                  
               class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                Get the Book
              </button>
              
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
    <div class="flex items-center justify-center pt-[2rem] pb-[4rem]">
    <button
    
     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-110">
      My Book
    </button>
    </div>
   
   </div>
   
  );
};

export default Card;