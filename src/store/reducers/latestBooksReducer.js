const initState = {
    books: [
        {id: '00001', title: 'latest0001', author: 'author0001', price: 0.01, imgUrl: ''}, 
        {id: '00002', title: 'latest0002', author: 'author0002', price: 0.02, imgUrl: ''}, 
        {id: '00003', title: 'latest0003', author: 'author0003', price: 0.03, imgUrl: ''}, 
        {id: '00004', title: 'latest0004', author: 'author0004', price: 0.04, imgUrl: ''}, 
        {id: '00005', title: 'latest0005', author: 'author0005', price: 0.05, imgUrl: ''}, 
        {id: '00006', title: 'latest0006', author: 'author0006', price: 0.06, imgUrl: ''}, 
    ]
}

const booksReducer = (state = initState, action) => {
    return state
} 

export default booksReducer