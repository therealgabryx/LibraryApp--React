const initState = {
    books: [
        {id: '00001', title: 'slider0001', author: 'author0001', price: 0.01, imgUrl: ''}, 
        {id: '00002', title: 'slider0002', author: 'author0002', price: 0.02, imgUrl: ''}, 
        {id: '00003', title: 'slider0003', author: 'author0003', price: 0.03, imgUrl: ''}, 
        {id: '00004', title: 'slider0004', author: 'author0004', price: 0.04, imgUrl: ''}, 
        {id: '00005', title: 'slider0005', author: 'author0005', price: 0.05, imgUrl: ''}, 
    ]
}

const booksSliderReducer = (state = initState, action) => {
    return state
} 

export default booksSliderReducer