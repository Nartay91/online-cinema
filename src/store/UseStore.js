import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set) => ({
        notes: [],
        // В функции addNote добавляем дату создания
        addNote: (title, text, author) =>
          set((state) => ({
            notes: [
              ...state.notes,
              {
                id: Math.random().toString(36).substr(2, 9),
                title,
                text,
                author,
                done: false,
                createdAt: new Date().toLocaleString(), // Добавляем дату и время
              },
            ],
          })),

        editNote: (id, updatedData) =>
          set((state) => ({
            notes: state.notes.map((note) =>
              note.id === id ? { ...note, ...updatedData } : note
            ),
          })),
        toggleDone: (id) =>
          set((state) => ({
            notes: state.notes.map((note) =>
              note.id === id ? { ...note, done: !note.done } : note
            ),
          })),
        deleteNote: (id) =>
          set((state) => ({
            notes: state.notes.filter((note) => note.id !== id),
          })),
      }),
      {
        name: "notes-storage", // Название для локального хранилища
      }
    ),
    { name: "NotesStore" } // Название для DevTools
  )
);

export default useStore;
