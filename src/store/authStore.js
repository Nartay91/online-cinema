import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,

      login: (userData) => {
        set({ user: userData });
      },

      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;



// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useAuthStore = create(
//   persist(
//     (set) => ({
//       user: null,
//       register: (userData) => set({ user: userData }), 
//       login: (userData) => set({ user: userData }),  
//       logout: () => set({ user: null }), 
//     }),
//     {
//       name: "auth-storage", // Имя хранилища в localStorage
//       getStorage: () => localStorage, 
//     }
//   )
// );

// export default useAuthStore;


// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   user: JSON.parse(localStorage.getItem("user")) || null, // Загружаем пользователя

//   login: (userData) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     set({ user: userData }); // Обновляем состояние
//   },

//   logout: () => {
//     localStorage.removeItem("user");
//     set({ user: null });
//   },
// }));

// export default useAuthStore;


// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   user: JSON.parse(localStorage.getItem("user")) || null,
  
//   login: (userData) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     set({ user: userData });
//   },

//   logout: () => {
//     localStorage.removeItem("user");
//     set({ user: null });
//   },
// }));

// export default useAuthStore;
