import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    jobs:[],
    isLoading:true,
    error:null
}



const jobSlice = createSlice({
    name:"job",
    initialState: initialState,
    reducers:{
        // ! yüklenme durumu
setLoading: (state) => {
    state.isLoading=true
},
//! hata durumu 
setError: (state,action) => {
    state.isLoading=false
    state.error=action.payload.message
},
// ! apiden iş verisini al reducera ilet
setJobs: (state,action) => {
     // Yüklenme state'ini güncelle
     state.isLoading = false;
     // Hata state'ini null'a çek
     state.error = null;
     // Gelen iş verisini state içerisindeki jobs'a aktar
     state.jobs = action.payload;
},
// ! yeni iş ekle
createJob: (state,action) => {
    // action içerisinde gelen payload değerini state içerisindeki jobs dizisine aktar
    state.jobs.push(action.payload);
},
// ! iş sil 
deleteJob: (state,action) => {
     // Silinecek elemanın sırasını state içerisinden bul
     const index = state.jobs.findIndex((i) => i.id == action.payload);

     // Sırası bilinen elemanı state'den kaldır
     state.jobs.splice(index, 1);
},
    }

})

// aksiyonlar
export const { setLoading, setError, setJobs, createJob, deleteJob} = jobSlice.actions
// reducer
export default jobSlice.reducer