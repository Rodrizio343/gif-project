import {act, renderHook} from '@testing-library/react-hooks'
import useForm from './hook'

const setup = (params) => renderHook(()=>useForm(params)) 

test('should change keyword', ()=>{
    const{result} = setup()

    act(()=>{
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test('shoul use initial values', ()=>{
    const{result} = setup({
        initialKeyword: 'matrix'
    })

    expect(result.current.keyword).toBe('matrix')
})

test('shoul update correctly times when used twice', ()=>{
    const{result} = setup()

    act(()=>{
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')
    })

    expect(result.current.keyword).toBe('ba')
    expect(result.current.times).toBe(2)
})

test('reset change keywor, times and rating to default', ()=>{
    const {result} = setup()

    act(()=>{
        result.current.resetFilters()
    })

    expect(result.current.keyword).toBe('')
    expect(result.current.times).toBe(0)
    expect(result.current.rating).toBe('g')
})