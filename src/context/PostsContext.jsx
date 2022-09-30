import React, {createContext} from "react"
import {useState} from "react";

export const PostsContext = createContext({
        posts: [],
        addPost: (value) => {
        },
        removePost: (id) => {
        },
        clear: () => {
        }
    }
)

function PostsState({children, ...props}) {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Vero sed sit sed qui est amet amet."},
        {id: 2, title: "C#", body: "Amet veniam luptatum facilisis sea lorem aliquyam ut diam et."},
        {id: 3, title: "Ruby", body: "Nonummy amet duo laoreet sanctus nulla erat justo nonumy dolor."},
        {id: 4, title: "Java", body: "Dolore possim diam gubergren ut odio sit no kasd duisr."},
        {id: 5, title: "React", body: "Sed no erat sea labore amet et diam dolore invidunt."},
        {id: 6, title: "Python", body: "Et justo sed amet feugait et sadipscing dolores rebum diam."}
    ])
    const addPost = (post) => {
        setPosts(prev => [...prev, post])
    }
    const removePost = (id) => {
        setPosts(prev => [...prev].filter(x => {
            return x.id !== id;
        }))
    }
    const clear = () => {
        setPosts([])
    }
    return (
        <>
            <PostsContext.Provider value={{posts: posts,
                                         addPost: addPost,
                                         removePost: removePost,
                                         clear:clear
            }}>
                {children}
            </PostsContext.Provider>
        </>
    )
}

export default PostsState;
/*
import React, {createContext, useState} from "react";

interface IModalContext {
    // Состояние видимости окна
    modal: boolean,
    // Функция открытия окна
    open: () => void,
    // Функция закрытия окна
    close: () => void

}// Создание контекста модального окна, заглушки методов.
export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {
    },
    close: () => {
    }
})
// Функции изменения состояния окна, реализация методов.
export const ModalState = ({children}: { children: React.ReactNode }) => {
    const [modal, setModal] = useState(false);
    const open = () => {
        setModal(true);
    };
    const close = () => {
        setModal(false);
    }
    return (
        <ModalContext.Provider value={{modal, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}
 */