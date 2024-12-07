<template>
  <main>
    <TheLoaderMain v-if="isLoadingBase"></TheLoaderMain>
    <body
      class="font-poppins bg-gray-facebook overflow-x-hidden"
      v-if="text.lang.length > 0"
    >
      <main class="pl-8 min-h-full xl:pt-0">
        <!-- s: Sidebar -->
        <TheSidebarComponent :TEXT="text"></TheSidebarComponent>
        <!-- e: Sidebar -->

        <div class="h-full relative overflow-y-auto lg:ml-56">
          <!-- s: Header-->
          <TheHeaderComponent :TEXT="text"></TheHeaderComponent>
          <!-- e: Header -->
        </div>
      </main>

      <RouterView></RouterView>

      <!-- Add abscence start-->
      <!-- <div
         id="AddAbsence"
         class="fixed bg-white rounded-xl top-[20%] z-10 w-[492px] left-0 right-0 m-auto shadow-md hidden"
       >
         <img
           class="--closeAddAbsence absolute top-4 right-4 cursor-pointer"
           src="images/close.svg"
         />
         <div class="p-4 border-b">Ajout d’une absence</div>
         <div class="p-4"> -->

      <!-- s: form -->
      <!-- <form action="#" class="flex flex-col space-y-5">
             <div class="flex flex-col space-y-1">
               <label for="plan" class="text-sm mb-1">Agent</label>
               <select
                 id="plan"
                 class="w-full mt-1 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 opacity-75 text-sm"
               >
                 <option selected>Surya Aniel</option>
                 <option value="0">Pierre Kanoha</option>
                 <option value="0">Tony</option>
                 <option value="0">Aleck King</option>
               </select>
             </div>
             <div class="grid grid-cols-10 gap-3 h-16">
               <div class="relative col-span-5">
                 <div>
                   <label for="description" class="text-sm mb-2 block"
                     >Date de début</label
                   >
                   <input
                     type="text"
                     placeholder="Date"
                     class="datepicker px-2 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 text-sm"
                   />
                 </div>
                 <span
                   class="absolute relative right-0 bottom-[38px] h-[38px] inline-block border-l-2 px-4 py-2 float-right"
                 >
                   <svg
                     width="18"
                     height="18"
                     viewBox="0 0 18 18"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M6 0C6.19891 0 6.38968 0.0790176 6.53033 0.21967C6.67098 0.360322 6.75 0.551088 6.75 0.75V1.5H11.25V0.75C11.25 0.551088 11.329 0.360322 11.4697 0.21967C11.6103 0.0790176 11.8011 0 12 0C12.1989 0 12.3897 0.0790176 12.5303 0.21967C12.671 0.360322 12.75 0.551088 12.75 0.75V1.5H14.8335C15.1508 1.5 15.4651 1.5625 15.7583 1.68395C16.0514 1.80539 16.3178 1.98338 16.5422 2.20778C16.7666 2.43217 16.9446 2.69856 17.0661 2.99175C17.1875 3.28493 17.25 3.59916 17.25 3.9165V15.5835C17.25 15.9008 17.1875 16.2151 17.0661 16.5083C16.9446 16.8014 16.7666 17.0678 16.5422 17.2922C16.3178 17.5166 16.0514 17.6946 15.7583 17.8161C15.4651 17.9375 15.1508 18 14.8335 18H3.1665C2.5256 18 1.91096 17.7454 1.45778 17.2922C1.00459 16.839 0.75 16.2244 0.75 15.5835V3.9165C0.75 3.2756 1.00459 2.66096 1.45778 2.20778C1.91096 1.75459 2.5256 1.5 3.1665 1.5H5.25V0.75C5.25 0.551088 5.32902 0.360322 5.46967 0.21967C5.61032 0.0790176 5.80109 0 6 0V0ZM5.25 3H3.1665C2.66025 3 2.25 3.41025 2.25 3.9165V6.75H15.75V3.9165C15.75 3.41025 15.3398 3 14.8335 3H12.75V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75V3H6.75V3.75C6.75 3.94891 6.67098 4.13968 6.53033 4.28033C6.38968 4.42098 6.19891 4.5 6 4.5C5.80109 4.5 5.61032 4.42098 5.46967 4.28033C5.32902 4.13968 5.25 3.94891 5.25 3.75V3ZM15.75 8.25H2.25V15.5835C2.25 16.0898 2.66025 16.5 3.1665 16.5H14.8335C15.3398 16.5 15.75 16.0898 15.75 15.5835V8.25Z"
                       fill="#5A657C"
                     />
                   </svg>
                 </span>
               </div>
               <div class="relative col-span-5">
                 <div>
                   <label for="description" class="text-sm mb-2 block"
                     >Date de fin</label
                   >
                   <input
                     type="text"
                     placeholder="Date"
                     class="datepicker px-2 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 text-sm"
                   />
                 </div>
                 <span
                   class="absolute relative right-0 bottom-[38px] h-[38px] inline-block border-l-2 px-4 py-2 float-right"
                 >
                   <svg
                     width="18"
                     height="18"
                     viewBox="0 0 18 18"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M6 0C6.19891 0 6.38968 0.0790176 6.53033 0.21967C6.67098 0.360322 6.75 0.551088 6.75 0.75V1.5H11.25V0.75C11.25 0.551088 11.329 0.360322 11.4697 0.21967C11.6103 0.0790176 11.8011 0 12 0C12.1989 0 12.3897 0.0790176 12.5303 0.21967C12.671 0.360322 12.75 0.551088 12.75 0.75V1.5H14.8335C15.1508 1.5 15.4651 1.5625 15.7583 1.68395C16.0514 1.80539 16.3178 1.98338 16.5422 2.20778C16.7666 2.43217 16.9446 2.69856 17.0661 2.99175C17.1875 3.28493 17.25 3.59916 17.25 3.9165V15.5835C17.25 15.9008 17.1875 16.2151 17.0661 16.5083C16.9446 16.8014 16.7666 17.0678 16.5422 17.2922C16.3178 17.5166 16.0514 17.6946 15.7583 17.8161C15.4651 17.9375 15.1508 18 14.8335 18H3.1665C2.5256 18 1.91096 17.7454 1.45778 17.2922C1.00459 16.839 0.75 16.2244 0.75 15.5835V3.9165C0.75 3.2756 1.00459 2.66096 1.45778 2.20778C1.91096 1.75459 2.5256 1.5 3.1665 1.5H5.25V0.75C5.25 0.551088 5.32902 0.360322 5.46967 0.21967C5.61032 0.0790176 5.80109 0 6 0V0ZM5.25 3H3.1665C2.66025 3 2.25 3.41025 2.25 3.9165V6.75H15.75V3.9165C15.75 3.41025 15.3398 3 14.8335 3H12.75V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75V3H6.75V3.75C6.75 3.94891 6.67098 4.13968 6.53033 4.28033C6.38968 4.42098 6.19891 4.5 6 4.5C5.80109 4.5 5.61032 4.42098 5.46967 4.28033C5.32902 4.13968 5.25 3.94891 5.25 3.75V3ZM15.75 8.25H2.25V15.5835C2.25 16.0898 2.66025 16.5 3.1665 16.5H14.8335C15.3398 16.5 15.75 16.0898 15.75 15.5835V8.25Z"
                       fill="#5A657C"
                     />
                   </svg>
                 </span>
               </div>
             </div>
             <div class="flex flex-col space-y-1">
               <label for="plan" class="text-sm mb-1">Type d’absence</label>
               <select
                 id="plan"
                 class="w-full mt-1 px-2 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 opacity-75 text-sm"
               >
                 <option selected>Maladie</option>
                 <option value="0">Maladie 1</option>
                 <option value="0">Maladie 2</option>
                 <option value="0">Maladie 3</option>
                 <option value="0">Maladie 4</option>
               </select>
             </div>
             <div class="flex flex-col space-y-1 h-[75px]">
               <div class="relative col-span-5">
                 <div>
                   <label for="description" class="text-sm mb-2 block"
                     >Justificatifs</label
                   >
                   <input
                     id="UploadURL"
                     type="text"
                     placeholder=""
                     class="w-full px-2 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 text-sm"
                   />
                 </div>
                 <span
                   class="absolute relative right-0 bottom-[38px] h-[38px] inline-block px-4 py-2 float-right"
                 >
                   <svg
                     width="16"
                     height="21"
                     viewBox="0 0 16 21"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M2 20.8689C1.45 20.8689 0.979333 20.6732 0.588 20.2819C0.196 19.8899 0 19.4189 0 18.8689V2.8689C0 2.3189 0.196 1.8479 0.588 1.4559C0.979333 1.06456 1.45 0.868896 2 0.868896H11L16 5.8689V18.8689C16 19.4189 15.8043 19.8899 15.413 20.2819C15.021 20.6732 14.55 20.8689 14 20.8689H2ZM2 18.8689H14V6.8689H10V2.8689H2V18.8689ZM8 17.8689C9.11667 17.8689 10.0627 17.4772 10.838 16.6939C11.6127 15.9106 12 14.9689 12 13.8689V9.8689H10V13.8689C10 14.4189 9.80833 14.8899 9.425 15.2819C9.04167 15.6732 8.56667 15.8689 8 15.8689C7.45 15.8689 6.97933 15.6732 6.588 15.2819C6.196 14.8899 6 14.4189 6 13.8689V8.3689C6 8.2189 6.05 8.0979 6.15 8.0059C6.25 7.91456 6.36667 7.8689 6.5 7.8689C6.65 7.8689 6.771 7.91456 6.863 8.0059C6.95433 8.0979 7 8.2189 7 8.3689V13.8689H9V8.3689C9 7.6689 8.75833 7.07723 8.275 6.5939C7.79167 6.11056 7.2 5.8689 6.5 5.8689C5.8 5.8689 5.20833 6.11056 4.725 6.5939C4.24167 7.07723 4 7.6689 4 8.3689V13.8689C4 14.9689 4.39167 15.9106 5.175 16.6939C5.95833 17.4772 6.9 17.8689 8 17.8689Z"
                       fill="#5A657C"
                     />
                   </svg>
                 </span>
               </div>
             </div>
 
             <div class="flex flex-col space-y-1">
               <label for="description" class="text-sm mb-1">Commentaire</label>
               <textarea
                 id="description"
                 rows="4"
                 class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Entrer une description"
               ></textarea>
             </div>
 
             <div class="flex mt-2 self-end gap-3">
               <button
                 class="mt-2 px-4 py-1 text-sm font-normal border-2 border-black text-black transition-colors duration-300 rounded-md hover:bg-black hover:text-white focus:outline-none"
               >
                 Annuler
               </button>
               <button
                 class="mt-2 px-4 py-1 text-sm font-bold text-white transition-colors duration-300 bg-black rounded-md hover:bg-btn-blue-hover focus:outline-none"
               >
                 Enregister
               </button>
             </div>
           </form> -->
      <!-- e: form -->
      <!-- </div>
       </div> -->
      <!--  Add abscence end-->

      <!-- add doc-->
      <!-- <div
         id="AddJustificatifs"
         class="fixed bg-white rounded-xl top-[20%] z-10 w-[492px] left-0 right-0 m-auto shadow-md hidden"
       >
         <img
           class="--closeAddJustificatifs absolute top-4 right-4 cursor-pointer"
           src="images/close.svg"
         />
         <div class="p-4 border-b">Ajout d’un document</div>
         <div class="p-4"> -->
      <!-- s: form -->
      <!-- <form action="#" class="flex flex-col space-y-5">
             <div class="flex flex-col space-y-1 h-[75px]">
               <div class="relative col-span-5">
                 <div>
                   <label for="description" class="text-sm mb-2 block"
                     >Désignation</label
                   >
                   <input
                     type="text"
                     placeholder="Entrer un élément"
                     value="Acte de naissance "
                     class="px-2 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 text-sm w-full"
                   />
                 </div>
               </div>
             </div>
             <div class="flex flex-col space-y-1 h-[75px]">
               <div class="relative col-span-5">
                 <div>
                   <label for="description" class="text-sm mb-2 block"
                     >Documents</label
                   >
                   <input
                     type="file"
                     placeholder="Entrer un titre"
                     class="w-full px-2 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 text-sm"
                   />
                 </div>
                 <span
                   class="absolute relative right-0 bottom-[38px] h-[38px] inline-block px-4 py-2 float-right border-l"
                 >
                   <svg
                     width="16"
                     height="21"
                     viewBox="0 0 16 21"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M2 20.8689C1.45 20.8689 0.979333 20.6732 0.588 20.2819C0.196 19.8899 0 19.4189 0 18.8689V2.8689C0 2.3189 0.196 1.8479 0.588 1.4559C0.979333 1.06456 1.45 0.868896 2 0.868896H11L16 5.8689V18.8689C16 19.4189 15.8043 19.8899 15.413 20.2819C15.021 20.6732 14.55 20.8689 14 20.8689H2ZM2 18.8689H14V6.8689H10V2.8689H2V18.8689ZM8 17.8689C9.11667 17.8689 10.0627 17.4772 10.838 16.6939C11.6127 15.9106 12 14.9689 12 13.8689V9.8689H10V13.8689C10 14.4189 9.80833 14.8899 9.425 15.2819C9.04167 15.6732 8.56667 15.8689 8 15.8689C7.45 15.8689 6.97933 15.6732 6.588 15.2819C6.196 14.8899 6 14.4189 6 13.8689V8.3689C6 8.2189 6.05 8.0979 6.15 8.0059C6.25 7.91456 6.36667 7.8689 6.5 7.8689C6.65 7.8689 6.771 7.91456 6.863 8.0059C6.95433 8.0979 7 8.2189 7 8.3689V13.8689H9V8.3689C9 7.6689 8.75833 7.07723 8.275 6.5939C7.79167 6.11056 7.2 5.8689 6.5 5.8689C5.8 5.8689 5.20833 6.11056 4.725 6.5939C4.24167 7.07723 4 7.6689 4 8.3689V13.8689C4 14.9689 4.39167 15.9106 5.175 16.6939C5.95833 17.4772 6.9 17.8689 8 17.8689Z"
                       fill="#5A657C"
                     />
                   </svg>
                 </span>
               </div>
             </div>
             <div class="flex mt-2 self-end gap-3">
               <button
                 class="mt-2 px-4 py-1 text-sm font-normal border-2 border-black text-black transition-colors duration-300 rounded-md hover:bg-black hover:text-white focus:outline-none"
               >
                 Annuler
               </button>
               <button
                 id="BtnVisualiser"
                 class="mt-2 px-4 py-1 text-sm font-medium border-2 border-black text-white transition-colors duration-300 bg-[#082471] rounded-md hover:bg-black hover:text-white focus:outline-none"
               >
                 Visualiser
               </button>
               <button
                 class="mt-2 px-4 py-1 text-sm font-medium text-white transition-colors duration-300 bg-black rounded-md hover:bg-btn-blue-hover focus:outline-none"
               >
                 Enregister
               </button>
             </div>
           </form> -->
      <!-- e: form -->
      <!-- </div>
       </div> -->
      <!-- add doc end-->

      <!--  Add justicatif start-->
      <!-- <div
         id="AddJustificatifsVisual"
         class="fixed bg-white rounded-xl top-[20%] z-10 w-[492px] left-0 right-0 m-auto shadow-md hidden"
       >
         <img
           class="--closeAddJustificatifsVisual absolute top-4 right-4 cursor-pointer"
           src="images/close.svg"
         />
         <div class="p-4 border-b">Ajout d’un document</div>
         <div class="p-4"> -->
      <!-- s: form -->
      <!-- <form action="#" class="flex flex-col space-y-5">
             <div class="flex flex-col space-y-1 h-[75px]">
               <div class="relative col-span-5">
                 <div>
                   <label for="description" class="text-sm mb-2 block"
                     >Désignation</label
                   >
                   <input
                     type="text"
                     placeholder="Entrer un élément"
                     value="Acte de naissance "
                     class="px-2 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 text-sm w-full"
                   />
                 </div>
               </div>
             </div>
             <div class="flex flex-col space-y-1 h-[175px]">
               <div class="relative col-span-5">
                 <div>
                   <label for="description" class="text-sm mb-2 block"
                     >Documents</label
                   >
                   <div class="px-6 py-4 border border-gray-300 rounded">
                     <div
                       class="drop-zone flex items-center justify-center cursor-pointer border border-dashed border-[#7B61FF] rounded item-center text-center block h-[111px] w-[280px] m-auto"
                     >
                       <span class="drop-zone__prompt"
                         >Faites glisser et déposer</span
                       >
                       <input
                         type="file"
                         name="myFile"
                         class="drop-zone__input hidden w-full px-2 py-2 transition duration-300 border border-gray-300 rounded focus:border-2  focus:border-black focus:outline-0 text-sm"
                       />
                     </div>
                   </div>
                 </div>
                 <span
                   id="iconFileVis"
                   class="absolute relative right-0 bottom-[135px] h-[125px] inline-block px-4 py-12 float-right border-l"
                 >
                   <svg
                     width="16"
                     height="21"
                     viewBox="0 0 16 21"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M2 20.8689C1.45 20.8689 0.979333 20.6732 0.588 20.2819C0.196 19.8899 0 19.4189 0 18.8689V2.8689C0 2.3189 0.196 1.8479 0.588 1.4559C0.979333 1.06456 1.45 0.868896 2 0.868896H11L16 5.8689V18.8689C16 19.4189 15.8043 19.8899 15.413 20.2819C15.021 20.6732 14.55 20.8689 14 20.8689H2ZM2 18.8689H14V6.8689H10V2.8689H2V18.8689ZM8 17.8689C9.11667 17.8689 10.0627 17.4772 10.838 16.6939C11.6127 15.9106 12 14.9689 12 13.8689V9.8689H10V13.8689C10 14.4189 9.80833 14.8899 9.425 15.2819C9.04167 15.6732 8.56667 15.8689 8 15.8689C7.45 15.8689 6.97933 15.6732 6.588 15.2819C6.196 14.8899 6 14.4189 6 13.8689V8.3689C6 8.2189 6.05 8.0979 6.15 8.0059C6.25 7.91456 6.36667 7.8689 6.5 7.8689C6.65 7.8689 6.771 7.91456 6.863 8.0059C6.95433 8.0979 7 8.2189 7 8.3689V13.8689H9V8.3689C9 7.6689 8.75833 7.07723 8.275 6.5939C7.79167 6.11056 7.2 5.8689 6.5 5.8689C5.8 5.8689 5.20833 6.11056 4.725 6.5939C4.24167 7.07723 4 7.6689 4 8.3689V13.8689C4 14.9689 4.39167 15.9106 5.175 16.6939C5.95833 17.4772 6.9 17.8689 8 17.8689Z"
                       fill="#5A657C"
                     />
                   </svg>
                 </span>
               </div>
             </div>
             <div class="flex mt-2 self-end gap-3">
               <button
                 class="mt-2 px-4 py-1 text-sm font-normal border-2 border-black text-black transition-colors duration-300 rounded-md hover:bg-black hover:text-white focus:outline-none"
               >
                 Annuler
               </button>
 
               <button
                 class="mt-2 px-4 py-1 text-sm font-medium text-white transition-colors duration-300 bg-black rounded-md hover:bg-btn-blue-hover focus:outline-none"
               >
                 Enregister
               </button>
             </div>
           </form> -->
      <!-- e: form -->
      <!-- </div>
       </div> -->
      <!--  Add justicatif end-->
    </body>
  </main>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';

import TheSidebarComponent from "./TheSidebarComponent.vue";
import TheHeaderComponent from "./TheHeaderComponent.vue";
import { useEntrepriseStore } from "../../stores/entreprise";
import TheLoaderMain from "../loader/Loadertrans.vue";

export default {
  name: "TheHomeBase",
  components: {
    TheSidebarComponent,
    TheHeaderComponent,
    TheLoaderMain,
  },
  data() {
    return {
      isLoadingBase: true,
      text: {} as any,
    };
  },
  methods: {
    propagationEventChangeEntreprise() {
      alert("hello");
    },
    async fetchText() {
      this.text = useEntrepriseStore().getTexts();
      console.log("TEXT ON HOME COMPOSANT ===> ", this.text);
      if (Object.keys(this.text).length > 0) {
        this.isLoadingBase = false;
      }
    },
  },
  async mounted() {
    console.log("useEntrepriseStore", useEntrepriseStore().getEntreprise());
    await this.fetchText();
  },
};
</script>
