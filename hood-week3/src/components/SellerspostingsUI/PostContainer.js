import './PostContainer.css';
 
function PostContainer(props) {
    return(
    <div className="Cantiner-boxs">
        <div className="title">
            <h3>My offers</h3>
        </div>
        <div className="sell-or-buy">
            <p className='sell'>selling</p>
            <p className='buy'>Buying</p>
        </div>
        <div className="info">
           <div className="product">
                <p className='pro-img'>IMG</p>
                <p className='pro-dis'>Description</p>
        </div> 
        </div>
        
    </div>

    );
}
export default PostContainer;

 