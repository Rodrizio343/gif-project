import React from 'react'
import {render, waitForElement, screen, fireEvent} from '@testing-library/react'
import App from '../App'
import '../__mocks__/intersectionObserverMock'

// test('home wors as expected', async ()=>{
//     const {container} = render(<App />)
//     const gifLink = await waitForElement(
//         () => container.querySelector('.Gif-link')
//     )
//     expect(gifLink).toBeVisible()
// })

test('form could be used', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    const button = await screen.findByText('Buscar')

    fireEvent.change(input, {target: {value: 'matrix'}})
    fireEvent.click(button)

    const title = await screen.findByText('matrix')
    expect(title).toBeVisible()
})