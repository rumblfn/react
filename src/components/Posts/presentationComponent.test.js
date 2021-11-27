import React from 'react'
import {render, fireEvent, act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { PostsView } from "./presentationComponent";


const getData = () => {
    return null;
}

describe('PostsView', () => {
    it('вызов метода onSubmit по клику на кнопки', () => {
        const loading = false
        const error = false
        const posts = [
            {userId: 1, id: 1, title: "titleUser1", body: "bodyUser1"},
            {userId: 2, id: 2, title: "titleUser2", body: "bodyUser2"},
            {userId: 2, id: 3, title: "titleUser2", body: "bodyUser2"},
            {userId: 3, id: 4, title: "titleUser3", body: "bodyUser3"},
            {userId: 6, id: 5, title: "titleUser6", body: "bodyUser6"},
        ]

        const component = render(
            <PostsView
                loading={loading}
                error={error}
                posts={posts}
                getData={getData}
            />
        )
    });
})